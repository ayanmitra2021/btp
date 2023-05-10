import { ApiProperty } from "@nestjs/swagger"

export class UserDto{
    @ApiProperty()
    public userId: string

    @ApiProperty()
    public email: string

    @ApiProperty()
    public userPermissions: string[]
}