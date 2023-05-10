import {addProfile, createMap, forMember, mapFrom, MappingProfile} from "@automapper/core";
import { Customer } from "src/entities/customer.entity";

import {AutomapperProfile, InjectMapper} from "@automapper/nestjs";
import type {Mapper} from "@automapper/core";
import {Injectable} from "@nestjs/common";
import { PermissionSetResponseDto } from "../dtos/permission-set-response.dto";
import { PermissionSet } from "src/entities/permission-set.entity";

@Injectable()
export class MapQueryFindPermissionSet extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper: Mapper) => {
            createMap(
                mapper,
                PermissionSet,
                PermissionSetResponseDto,
                forMember(
                    destination => destination.permissionSetId,
                    mapFrom(source => source.id)
                ),
                forMember(
                    destination => destination.permissionSetName,
                    mapFrom(source => source.permissionSetName)
                ),
                forMember(
                    destination => destination.permissionSetDescription,
                    mapFrom(source => source.permissionSetDescription)
                ),
                forMember(
                    destination => destination.availablePermissions,
                    mapFrom(source => source.permissions.map(perm => perm.permissionName))
                )
            );
        };
    }
}
