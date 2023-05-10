import {CreateCustomerCommand} from "./../commands/create-customer.command";
import {addProfile, createMap, forMember, mapFrom, MappingProfile} from "@automapper/core";
import { Customer } from "src/entities/customer.entity";

import {AutomapperProfile, InjectMapper} from "@automapper/nestjs";
import type {Mapper} from "@automapper/core";
import {Injectable} from "@nestjs/common";

@Injectable()
export class MapCreateCustomerCommand extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper: Mapper) => {
            createMap(
                mapper,
                CreateCustomerCommand,
                Customer,
                forMember(
                    destination => destination.firstName,
                    mapFrom(source => source.firstName)
                ),
                forMember(
                    destination => destination.lastName,
                    mapFrom(source => source.lastName)
                ),
                forMember(
                    destination => destination.email,
                    mapFrom(source => source.email)
                ),
                forMember(
                    destination => destination.category,
                    mapFrom(source => source.category)
                )
            );
        };
    }
}
