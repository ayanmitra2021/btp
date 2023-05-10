import {addProfile, createMap, forMember, mapFrom, MappingProfile} from "@automapper/core";
import { Customer } from "src/entities/customer.entity";
import {AutomapperProfile, InjectMapper} from "@automapper/nestjs";
import type {Mapper} from "@automapper/core";
import {Injectable} from "@nestjs/common";
import { UpdateCustomerCommand } from "../commands/update-customer.command";

@Injectable()
export class MapUpdateCustomerCommand extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper: Mapper) => {
            createMap(
                mapper,
                UpdateCustomerCommand,
                Customer,
                forMember(
                    destination => destination.id,
                    mapFrom(source => source.id)
                ),
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
