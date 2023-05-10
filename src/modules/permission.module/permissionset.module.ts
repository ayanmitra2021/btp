import {CacheModule, MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";
import {CqrsModule} from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PermissionSet } from 'src/entities/permission-set.entity';
import { FindPermissionSetService, HandleFindPermissionSet } from "./queries/find-permissionset";
import { HandleQueryPermissionSet } from "./queries/query-permissionset";
import {AutomapperModule} from "@automapper/nestjs";
import {classes} from "@automapper/classes";
import { MapQueryFindPermissionSet } from "./maps/map-query-find-permission-set";
import { PermissionSetController } from "src/controllers/permission-set.controller";


@Module({
    imports: [
        CqrsModule, 
        TypeOrmModule.forFeature([PermissionSet]),
        CacheModule.register({
            ttl: Number(process.env.CACHE_TTL_SEC),
            max: Number(process.env.CACHE_MAX_ITEM),
            isGlobal: true
        }),
        AutomapperModule.forRoot({strategyInitializer: classes()})
    ],
    controllers: [PermissionSetController],
    providers: [
        HandleFindPermissionSet,
        HandleQueryPermissionSet,
        FindPermissionSetService,
        MapQueryFindPermissionSet
    ], 
    exports: [
        HandleFindPermissionSet,
        HandleQueryPermissionSet,
        FindPermissionSetService
    ]
})
export class PermissionSetModule { }
