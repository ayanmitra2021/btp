import { UseFilters, NotFoundException, Inject, CACHE_MANAGER, Injectable } from "@nestjs/common";
import { IInferredQueryHandler, IQueryHandler, QueryBus, QueryHandler } from "@nestjs/cqrs";
import { ApiProperty } from "@nestjs/swagger";
import { Query } from "src/extensions/type-safe-cqrs/query";
import { Cache } from "cache-manager";
import { Customer } from "src/entities/customer.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOptionsWhere, FindOptionsSelect, FindOneOptions, Repository } from "typeorm";
import { any } from "joi";
import { IsNumber, IsOptional } from "class-validator";
import { ExpressQuery } from "@tool-kid/express-query-adapter/src/express-query";
import { getQueryAdapter } from "@tool-kid/express-query-adapter";
import { Transform } from "class-transformer";
import { encode, isEmptyObject, toNumber, trim } from "src/utilities/helper.utilities";
import { odataQuery, executeQuery } from 'odata-v4-typeorm';

// export class QueryCustomer extends Query<Customer[]> {
//     @ApiProperty()
//     @IsOptional()
//     @Transform(({value}) => trim(value))
//     public query: ExpressQuery;
// }

export class QueryCustomer extends Query<Customer[]>{
    @ApiProperty()
    @Transform(({ value }) => toNumber(value, { default: 25, min: 1 }))
    @IsNumber()
    @IsOptional()
    public $top: number;

    @ApiProperty()
    @Transform(({ value }) => toNumber(value, { default: 10, min: 1 }))
    @IsNumber()
    @IsOptional()
    public $skip: number;

    @ApiProperty()
    @Transform(({ value }) => encode(value))
    @IsOptional()
    public $filter: string;

    @ApiProperty()
    @Transform(({ value }) => encode(value))
    @IsOptional()
    public $orderby: string;

    @ApiProperty()
    @Transform(({ value }) => encode(value))
    @IsOptional()
    public $select: string;

    @ApiProperty()
    @Transform(({ value }) => encode(value))
    @IsOptional()
    public $expand: string;

    @ApiProperty()
    @Transform(({ value }) => trim(value))
    @IsOptional()
    public division: string;

    @ApiProperty()
    @Transform(({ value }) => trim(value))
    @IsOptional()
    public subDivision: string;
}


@QueryHandler(QueryCustomer)
export class HandleQueryCustomer implements IInferredQueryHandler<QueryCustomer> {
    constructor(@InjectRepository(Customer) private customerRepo: Repository<Customer>) { }

    async execute(customerQuery: QueryCustomer): Promise<Customer[]> {
        //return await util.get(customerQuery);
        const queryJson: iODataQueryParams = customerQuery;
        if(isEmptyObject(queryJson)){
            return await this.customerRepo.find();
        }
        else{
            return await executeQuery(this.customerRepo, queryJson, null);
        }
    }
}
