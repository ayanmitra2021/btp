import {addProfile, createMap, forMember, mapFrom, MappingProfile} from "@automapper/core";
import {AutomapperProfile, InjectMapper} from "@automapper/nestjs";
import type {Mapper} from "@automapper/core";
import {Injectable} from "@nestjs/common";
import { BusinessPartner } from "src/entities/odata/business-partner-service";
import { BusinessPartnerResponseDto } from "../dtos/busines-partner-response.dto";
import { Categories } from "src/entities/odata/north-wind-service-v4";
import { CategoryResponseDto } from "../dtos/category-reponse.dto";

@Injectable()
export class MapCategoriesToResponse extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper: Mapper) => {
            createMap(
                mapper,
                Categories,
                CategoryResponseDto,
                forMember(
                    destination => destination.id,
                    mapFrom(source => source.id)
                ),
                forMember(
                    destination => destination.name,
                    mapFrom(source => source.name)
                )
            );
        };
    }
}
