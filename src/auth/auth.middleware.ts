import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NestMiddleware, HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import { FindUser, FindUserService } from 'src/modules/user.module/queries/find-user';
import { UserDto } from 'src/modules/user.module/dtos/user.dto';
import { FindPermissionSet, FindPermissionSetService } from 'src/modules/permission.module/queries/find-permissionset';
import { PermissionSetResponseDto } from 'src/modules/permission.module/dtos/permission-set-response.dto';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  constructor(
    private readonly findUserService: FindUserService,
    private readonly findPermissionSetService: FindPermissionSetService
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeaders = req.headers.authorization;

    if (authHeaders && (authHeaders as string).split(' ')[1]) {
      const token = (authHeaders as string).split(' ')[1];
      const decoded: any = jwt.verify(token, process.env.AUTH_SECRET_KEY);

      if(!decoded){
        throw new HttpException('Invalid bearer token.', HttpStatus.UNAUTHORIZED);
      }

      const findUser: FindUser = new FindUser();
      findUser.userId = decoded.userId;
      const user = await this.findUserService.findUser(findUser);

      if (!user) {
        throw new HttpException('No user found.', HttpStatus.UNAUTHORIZED);
      }

      if(!user.userPermissionXR){
        throw new HttpException('User do not have enough permissions.', HttpStatus.UNAUTHORIZED);
      }

      if(user.userPermissionXR.length === 0){
        throw new HttpException('User do not have enough permissions.', HttpStatus.UNAUTHORIZED);
      }

      let permissionArray: Array<string> = new Array<string>();
      const today = new Date();

      for(let index=0; index< user.userPermissionXR.length; ++index){
        
        //if the permission set is applicable in the future then we don't want to 
        //use it's associated permissions
        if(user.userPermissionXR[index].beginDate && 
          user.userPermissionXR[index].beginDate > today   
          ){
            continue;
        }

        //if the permission set expired then we don't want to 
        //use it's associated permissions
        if(user.userPermissionXR[index].endDate && 
          user.userPermissionXR[index].endDate < today   
          ){
            continue;
        }

        const findPermissionSet : FindPermissionSet = new FindPermissionSet();
        findPermissionSet.permissionSetId = user.userPermissionXR[index].id;
        const permissionSetResult : PermissionSetResponseDto = await this.findPermissionSetService.findPermissionSet(findPermissionSet);
        
        permissionArray = [...permissionArray, ...permissionSetResult.availablePermissions];
      }

      const userDto: UserDto = new UserDto();
      userDto.userId = user.userId;
      userDto.email= user.email;
      userDto.userPermissions = [... new Set(permissionArray.map(item => item))];

      req.user = userDto;
      next();

    } else {
      throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
    }
  }
}
