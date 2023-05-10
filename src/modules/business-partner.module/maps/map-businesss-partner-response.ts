import {addProfile, createMap, forMember, mapFrom, MappingProfile} from "@automapper/core";
import {AutomapperProfile, InjectMapper} from "@automapper/nestjs";
import type {Mapper} from "@automapper/core";
import {Injectable} from "@nestjs/common";
import { BusinessPartner } from "src/entities/odata/business-partner-service";
import { BusinessPartnerResponseDto } from "../dtos/busines-partner-response.dto";

@Injectable()
export class MapBusinesPartnerToResponse extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper: Mapper) => {
            createMap(
                mapper,
                BusinessPartner,
                BusinessPartnerResponseDto,
                forMember(
                    destination => destination.businessPartnerNumber,
                    mapFrom(source => source.businessPartner)
                ),
                forMember(
                    destination => destination.businessPartnerFullName,
                    mapFrom(source => source.firstName + ' ' + source.lastName)
                ),
                forMember(
                    destination => destination.customer,
                    mapFrom(source => source.customer)
                ),
                forMember(
                    destination => destination.supplier,
                    mapFrom(source => source.supplier)
                ),
                forMember(
                    destination => destination.businessPartnerCategory,
                    mapFrom(source => source.businessPartnerCategory)
                )
            );
        };
    }
}
