import { Controller, Get, Param, Query } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiForbiddenResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { RequiredPermissions } from "src/auth/required-permission.decorator";
import { ExpressQuery } from "@tool-kid/express-query-adapter/src/express-query";
import { PermissionSetResponseDto } from "src/modules/permission.module/dtos/permission-set-response.dto";
import { QueryPermissionSet } from "src/modules/permission.module/queries/query-permissionset";
import { FindPermissionSet } from "src/modules/permission.module/queries/find-permissionset";

@ApiTags("PermissionSet")
@Controller("permissionset")
export class PermissionSetController {

    constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

    @ApiOperation({summary: "List of permission sets"})
    @ApiCreatedResponse({
        description: "The list of permission sets has been successfully retrieved.",
        type: PermissionSetResponseDto,
        isArray: true,
    })
    @ApiForbiddenResponse({description: "Forbidden."})
    @ApiBadRequestResponse({description: "Bad Request."})
    @RequiredPermissions('Administration.PermissionSet.Get')
    @Get()
    async queryPermissionSets(@Query() permissionSetQuery: ExpressQuery): Promise<PermissionSetResponseDto[]> {
        const queryPermissionSet: QueryPermissionSet = new QueryPermissionSet();
        queryPermissionSet.query = permissionSetQuery
        return await this.queryBus.execute(queryPermissionSet);
    }
   
    @ApiOperation({summary: "Find specific permission set"})
    @ApiCreatedResponse({
        description: "The permission set has been successfully retrieved.",
        type: PermissionSetResponseDto,
        isArray: false,
    })
    @ApiForbiddenResponse({description: "Forbidden."})
    @ApiBadRequestResponse({description: "Bad Request."})
    @RequiredPermissions('Administration.PermissionSet.Find')
    @Get('/:id')
    async findPermissionSet(@Param() parameter: FindPermissionSet): Promise<PermissionSetResponseDto> {
        return await this.queryBus.execute(parameter);
    }
}
