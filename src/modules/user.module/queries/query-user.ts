import { UseFilters, NotFoundException, Inject, CACHE_MANAGER } from "@nestjs/common";
import {IInferredQueryHandler, IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {ApiProperty} from "@nestjs/swagger";
import {Query} from "src/extensions/type-safe-cqrs/query";
import { Cache } from "cache-manager";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/entities/user.entity";

export class QueryUser extends Query<User[]> {
    @ApiProperty()
    public filter: string = 'QUERY.ALL';

    @ApiProperty()
    public orderbycolumn: string = 'QUERY.DEFAULT_ORDERCOLUMN_NONE';
}

@QueryHandler(QueryUser)
export class HandleQueryUser implements IInferredQueryHandler<QueryUser> {

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ){}

    async execute(query: QueryUser): Promise<User[]> {

        const cacheKey = 'USER.[QUERY_FILTER].' + query.filter + '.[QUERY_ORDERBY].' + query.orderbycolumn;

        let cachedData: Array<User> = await this.cacheManager.get<Array<User>>(cacheKey);

        if(!cachedData){
            cachedData = await this.userRepo.find();
            await this.cacheManager.set(cacheKey, cachedData)
        }
        
        return cachedData;
    }
}
