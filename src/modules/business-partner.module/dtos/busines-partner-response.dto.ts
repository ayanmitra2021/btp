import { ApiProperty } from "@nestjs/swagger";

export class BusinessPartnerResponseDto {
    @ApiProperty()
    businessPartnerNumber : string;

    @ApiProperty()
    customer: string;

    @ApiProperty()
    supplier: string;

    @ApiProperty()
    businessPartnerCategory: string;

    @ApiProperty()
    businessPartnerFullName: string;
}