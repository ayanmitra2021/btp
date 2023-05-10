import {IInferredQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {ApiProperty} from "@nestjs/swagger";
import {Query} from "src/extensions/type-safe-cqrs/query";
import {IsNumber, IsOptional} from "class-validator";
import {InjectMapper} from "@automapper/nestjs";
import {Mapper} from "@automapper/core";
import {Transform} from "class-transformer";
import {encode, toNumber, trim} from "src/utilities/helper.utilities";
import {ODataRepository} from "src/odata-repository/ODataRepository";
import { CategoryResponseDto } from "../dtos/category-reponse.dto";
import { Categories, northWindServiceV4 } from "src/entities/odata/north-wind-service-v4";

export class QueryCategories extends Query<CategoryResponseDto[]> {
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
    public someOtherAttribute: string;
}

@QueryHandler(QueryCategories)
export class HandleQueryCategories implements IInferredQueryHandler<QueryCategories> {
    constructor(
        @InjectMapper() private mapper: Mapper,
        private categoryRepository: ODataRepository<Categories>
    ) {}

    async execute(businessPartnerQuery: QueryCategories): Promise<CategoryResponseDto[]> {
        return await this.getCategories(businessPartnerQuery);
    }

    async getCategories(categoryQuery: QueryCategories): Promise<CategoryResponseDto[]> {
        const { categoriesApi } = northWindServiceV4();

        const response = await this.categoryRepository.query(
            categoryQuery,
            categoriesApi,
            process.env.NORTHWIND_DESTINATION_NAME,
            null
        );

        return await this.mapToCategoryResponse(response);
    }

    private async mapToCategoryResponse(response) {

        const responseDataList: CategoryResponseDto[] = new Array<CategoryResponseDto>();

        for (let index = 0; index < response.length; ++index) {
            const mappedData: CategoryResponseDto = await this.mapper.mapAsync(
                response[index],
                Categories,
                CategoryResponseDto
            );

            responseDataList.push(mappedData);
        }

        return responseDataList;
    }
}
