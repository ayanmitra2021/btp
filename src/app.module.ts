import {Module, NestModule, RequestMethod, MiddlewareConsumer } from "@nestjs/common";
import {AutomapperModule} from "@automapper/nestjs";
import {classes} from "@automapper/classes";
import {CustomerModule} from "./modules/customer.module/customer.module";
import { BusinessPartnerModule } from './modules/business-partner.module/business-partner.module';
import {LoggerModule} from "nestjs-pino";
import {ConfigModule} from "@nestjs/config";
import { RequiredPermissionGuard } from "./auth/required-permission.guard";
import { APP_GUARD } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthMiddleware } from "./auth/auth.middleware";
import { Customer } from "./entities/customer.entity";
import { User } from "./entities/user.entity";
import { UserModule } from "./modules/user.module/user.module";
import { PermissionSet } from "./entities/permission-set.entity";
import { UserPermissionSetXR } from "./entities/user.permission-set-xr.entity";
import { PermissionSetModule } from './modules/permission.module/permissionset.module';
import { PermissionSetPermission } from "./entities/permission-set.permission.entity";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: './env/.env.development'
        }),
        TypeOrmModule.forRoot({
            type: 'sap',
            //logging: true,
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT) || 443,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            schema: process.env.DB_SCHEMA,
            encrypt: true,
            extra: {
                sslValidateCertificate: false,
            },
            //verboseRetryLog: true,
            //entities: [join(__dirname, '/entities/*.ts')],
            entities: [
                Customer, User, PermissionSet, PermissionSetPermission, UserPermissionSetXR
            ],
            synchronize: true
            
        }),
        AutomapperModule.forRoot([
            {
                name: "classes",
                strategyInitializer: classes(),
            },
        ]),
        LoggerModule.forRoot({
            pinoHttp: {
                transport: {
                    target: "pino-pretty",
                    options: {
                        colorize: true,
                        colorizeObjects: true,
                        singleLine: true,
                    },
                }
            },
        }),
        CustomerModule,
        UserModule,
        PermissionSetModule,
        BusinessPartnerModule
    ],
    providers:[
        {
            provide: APP_GUARD,
            useClass: RequiredPermissionGuard
        }
    ]
})
export class AppModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AuthMiddleware)
        .forRoutes({path: '/*', method: RequestMethod.ALL})
    }
}