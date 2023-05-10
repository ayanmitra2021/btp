import { UseFilters, NotFoundException, Inject, CACHE_MANAGER, Injectable } from "@nestjs/common";
import {IInferredQueryHandler, IQueryHandler, QueryBus, QueryHandler} from "@nestjs/cqrs";
import { ApiProperty } from "@nestjs/swagger";
import { Query } from "src/extensions/type-safe-cqrs/query";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cache } from "cache-manager";
import { User } from "src/entities/user.entity";


export class FindUser extends Query<User> {
    @ApiProperty()
    public userId: string;
}

@QueryHandler(FindUser)
export class HandleFindUser implements IInferredQueryHandler<FindUser> {

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ){}

    async execute(query: FindUser): Promise<User> {
        
        const cacheKey = 'USER.[FIND_FILTER].' + query.userId 
        var cachedData: User = await this.cacheManager.get<User>(cacheKey);

        if(!cachedData){
            cachedData = await this.userRepo.findOne({
                where: {userId: query.userId},
                relations: ['userPermissionXR']
            })
            await this.cacheManager.set(cacheKey, cachedData)
        }

        return cachedData;
    }
}

@Injectable()
export class FindUserService {

    constructor(private readonly queryBus: QueryBus) {}

    async findUser(query: FindUser) : Promise<User> {
        return await this.queryBus.execute(query);
    }
}
