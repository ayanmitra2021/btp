import {AutomapperModule} from "@automapper/nestjs";
import {CacheModule,  Module, NestModule, RequestMethod} from "@nestjs/common";
import {CqrsModule} from "@nestjs/cqrs";
import {CustomerController} from "../../controllers/customer.controller";
import {MapCreateCustomerCommand} from "./maps/map-create-customer";
import {classes} from "@automapper/classes";
import {HandleCreateCustomerCommand} from "./commands/create-customer.command";
import {HandleUpdateCustomerCommand} from "./commands/update-customer.command";
import { HandleQueryCustomer} from "./queries/query-customer";
import { TypeOrmModule } from "@nestjs/typeorm/dist";
import { Customer } from "src/entities/customer.entity";
import { HandleFindCustomer } from "./queries/find-customer";
import { MapUpdateCustomerCommand } from "./maps/map-update-customer";
import { HandleDeleteCustomerCommand } from "./commands/delete-customer.command";
import { WebSocketEventGateway } from "src/websocket-events/websocket-event-gateway";

@Module({
    imports: [
                CqrsModule, 
                TypeOrmModule.forFeature([Customer]),
                AutomapperModule.forRoot({strategyInitializer: classes()})
            ],
    controllers: [CustomerController],
    providers: [
        HandleCreateCustomerCommand,
        HandleUpdateCustomerCommand,
        HandleQueryCustomer,
        HandleFindCustomer,
        HandleDeleteCustomerCommand,
        MapCreateCustomerCommand,
        MapUpdateCustomerCommand,
        WebSocketEventGateway
    ]
})
export class CustomerModule {}
