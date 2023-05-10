import {CacheModule, MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";
import { User } from "src/entities/user.entity";
import {CqrsModule} from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HandleQueryUser } from "./queries/query-user";
import { HandleFindUser, FindUserService } from "./queries/find-user";

@Module({
    imports: [
        CqrsModule, 
        TypeOrmModule.forFeature([User]),
        CacheModule.register({
            ttl: Number(process.env.CACHE_TTL_SEC),
            max: Number(process.env.CACHE_MAX_ITEM),
            isGlobal: true
        })
    ],
    providers: [
        HandleQueryUser,
        HandleFindUser,
        FindUserService
    ], 
    exports: [
        HandleQueryUser,
        HandleFindUser,
        FindUserService
    ]
})
export class UserModule { }
