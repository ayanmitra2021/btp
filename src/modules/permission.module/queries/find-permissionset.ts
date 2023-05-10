import { UseFilters, NotFoundException, Inject, CACHE_MANAGER, Injectable } from "@nestjs/common";
import {IInferredQueryHandler, IQueryHandler, QueryBus, QueryHandler} from "@nestjs/cqrs";
import { ApiProperty } from "@nestjs/swagger";
import { Query } from "src/extensions/type-safe-cqrs/query";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cache } from "cache-manager";
import { User } from "src/entities/user.entity";
import { PermissionSet } from "src/entities/permission-set.entity";
import { PermissionSetResponseDto } from "../dtos/permission-set-response.dto";
import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/core";

export class FindPermissionSet extends Query<PermissionSetResponseDto> {
    @ApiProperty()
    public permissionSetId: number;
}

@QueryHandler(FindPermissionSet)
export class HandleFindPermissionSet implements IInferredQueryHandler<FindPermissionSet> {

    constructor(
        @InjectRepository(PermissionSet) private userRepo: Repository<PermissionSet>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        @InjectMapper() private mapper: Mapper,
    ){}

    async execute (query: FindPermissionSet): Promise<PermissionSetResponseDto> {
        
        const cacheKey = 'PERMISSIONSET.[FIND_FILTER].' + query.permissionSetId;
        
        let permissionResponseData: PermissionSetResponseDto = await this.cacheManager.get<PermissionSetResponseDto>(cacheKey);

        if(!permissionResponseData){
            
            const result : PermissionSet = await this.userRepo.findOne({
                where: {id: query.permissionSetId},
                relations: ['permissions']
            })

            if(result){
                permissionResponseData = await this.mapper.mapAsync(result, PermissionSet, PermissionSetResponseDto);
                await this.cacheManager.set(cacheKey, permissionResponseData)
            }
        }

        return permissionResponseData;
    }
}

@Injectable()
export class FindPermissionSetService {

    constructor(private readonly queryBus: QueryBus) {}

    async findPermissionSet(query: FindPermissionSet) : Promise<PermissionSetResponseDto> {
        return await this.queryBus.execute(query);
    }
}
