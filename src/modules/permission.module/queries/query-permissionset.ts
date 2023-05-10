import { UseFilters, NotFoundException, Inject, CACHE_MANAGER } from "@nestjs/common";
import {IInferredQueryHandler, IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {ApiProperty} from "@nestjs/swagger";
import {Query} from "src/extensions/type-safe-cqrs/query";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/entities/user.entity";
import { PermissionSetResponseDto } from "../dtos/permission-set-response.dto";
import { IsOptional } from "class-validator";
import { ExpressQuery } from "@tool-kid/express-query-adapter/src/express-query";
import { PermissionSet } from "src/entities/permission-set.entity";
import { getQueryAdapter } from "@tool-kid/express-query-adapter";
import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/core";

export class QueryPermissionSet extends Query<PermissionSetResponseDto[]> {
    @ApiProperty()
    @IsOptional()
    public query: ExpressQuery;
}

@QueryHandler(QueryPermissionSet)
export class HandleQueryPermissionSet implements IInferredQueryHandler<QueryPermissionSet> {

    constructor(
        @InjectMapper() private mapper: Mapper,
        @InjectRepository(PermissionSet) private permissionSetRepo: Repository<PermissionSet>
    ){}

    async execute(permissionSetQuery: QueryPermissionSet): Promise<PermissionSetResponseDto[]> {
        const builder = await getQueryAdapter({ adapter : 'typeorm' });
        const findOption = builder.build(permissionSetQuery.query);
        const permissionSetData : PermissionSet[] =  await this.permissionSetRepo.find({
            relations: ['permissions'],
            loadEagerRelations: true,
            where: findOption.where,
            order: findOption.order,
            skip: findOption.skip,
            take: findOption.take
        });
        const responseDataList : PermissionSetResponseDto[] = new Array<PermissionSetResponseDto>();

        for(let index = 0; index<permissionSetData.length; ++index){
            const mappedData : PermissionSetResponseDto =  await this.mapper.mapAsync(permissionSetData[index], PermissionSet, PermissionSetResponseDto);
            responseDataList.push(mappedData);
        }

        return responseDataList;
    }
}
