import { ApiProperty } from "@nestjs/swagger"

export class PermissionSetResponseDto{
    @ApiProperty()
    permissionSetId: number

    @ApiProperty()
    permissionSetName: string

    @ApiProperty()
    permissionSetDescription: string

    @ApiProperty()
    availablePermissions: string[]
}