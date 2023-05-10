import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RequiredPermissionGuard implements CanActivate {

  constructor(private reflector: Reflector){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>('permissions',
                                                      [context.getHandler(), context.getClass()]);
    if(!requiredPermissions){
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    if(!user){
      throw new UnauthorizedException("User not found here");
    }

    if(!user.userPermissions){
      throw new UnauthorizedException("User do not have any permissions");
    }

    if(user.userPermissions.length === 0){
      throw new UnauthorizedException("User do not have enough permissions");
    }
    
    return requiredPermissions.some((premission) => user.userPermissions?.includes(premission));
  }
}
