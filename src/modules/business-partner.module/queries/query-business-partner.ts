import {IInferredQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {ApiProperty} from "@nestjs/swagger";
import {Query} from "src/extensions/type-safe-cqrs/query";
import {IsNumber, IsOptional} from "class-validator";
import {BusinessPartner, businessPartnerService} from "src/entities/odata/business-partner-service";
import {InjectMapper} from "@automapper/nestjs";
import {Mapper} from "@automapper/core";
import {BusinessPartnerResponseDto} from "../dtos/busines-partner-response.dto";
import {Transform} from "class-transformer";
import {encode, toNumber, trim} from "src/utilities/helper.utilities";
import {Inject} from "@nestjs/common";
import {ODataRepository} from "src/odata-repository/ODataRepository";

export class QueryBusinessPartner extends Query<BusinessPartnerResponseDto[]> {
    @ApiProperty()
    @Transform(({value}) => toNumber(value, {default: 25, min: 1}))
    @IsNumber()
    @IsOptional()
    public $top: number;

    @ApiProperty()
    @Transform(({value}) => toNumber(value, {default: 10, min: 1}))
    @IsNumber()
    @IsOptional()
    public $skip: number;

    @ApiProperty()
    @Transform(({value}) => encode(value))
    @IsOptional()
    public $filter: string;

    @ApiProperty()
    @Transform(({value}) => encode(value))
    @IsOptional()
    public $orderby: string;

    @ApiProperty()
    @Transform(({value}) => encode(value))
    @IsOptional()
    public $select: string;

    @ApiProperty()
    @Transform(({value}) => encode(value))
    @IsOptional()
    public $expand: string;

    @ApiProperty()
    @Transform(({value}) => trim(value))
    @IsOptional()
    public division: string;

    @ApiProperty()
    @Transform(({value}) => trim(value))
    @IsOptional()
    public subDivision: string;
}

@QueryHandler(QueryBusinessPartner)
export class HandleQueryBusinessPartner implements IInferredQueryHandler<QueryBusinessPartner> {
    constructor(
        @InjectMapper() private mapper: Mapper,
        private businessPartnerRepository: ODataRepository<BusinessPartner>
    ) {}

    async execute(businessPartnerQuery: QueryBusinessPartner): Promise<BusinessPartnerResponseDto[]> {
        return await this.getBusinessPartners(businessPartnerQuery);
    }

    async getBusinessPartners(businessPartnerQuery: QueryBusinessPartner): Promise<BusinessPartnerResponseDto[]> {
        const {businessPartnerApi} = businessPartnerService();
        const response = await this.businessPartnerRepository.query(
            businessPartnerQuery,
            businessPartnerApi,
            process.env.SAP_S4_HANA_API_ENDPOINT,
            process.env.SAP_S4_HANA_API_KEY
        );
        return await this.mapToBusinessPartnerResponse(response);
    }

    private async mapToBusinessPartnerResponse(response) {
        const responseDataList: BusinessPartnerResponseDto[] = new Array<BusinessPartnerResponseDto>();
        for (let index = 0; index < response.length; ++index) {
            const mappedData: BusinessPartnerResponseDto = await this.mapper.mapAsync(
                response[index],
                BusinessPartner,
                BusinessPartnerResponseDto
            );
            responseDataList.push(mappedData);
        }
        return responseDataList;
    }
}
