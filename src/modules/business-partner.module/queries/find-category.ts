import {IInferredQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {ApiProperty} from "@nestjs/swagger";
import {Query} from "src/extensions/type-safe-cqrs/query";
import {CategoryResponseDto} from "../dtos/category-reponse.dto";
import {ODataRepository} from "src/odata-repository/ODataRepository";
import {Categories, northWindServiceV4} from "src/entities/odata/north-wind-service-v4";
import { IsNumber } from "class-validator";
import { Transform } from "class-transformer";
import { toNumber } from "src/utilities/helper.utilities";

export class FindCategory extends Query<CategoryResponseDto> {
    @ApiProperty()
    @IsNumber()
    @Transform(({value}) => toNumber(value))
    public id: number;
}

@QueryHandler(FindCategory)
export class HandleFindCategory implements IInferredQueryHandler<FindCategory> {
    constructor(private northwindRepository: ODataRepository<Categories>) {}

    async execute(findCommand: FindCategory): Promise<CategoryResponseDto> {
        const {categoriesApi} = northWindServiceV4();
        const result = await this.northwindRepository.find(
            findCommand.id,
            categoriesApi,
            process.env.NORTHWIND_API_ENDPOINT,
            null
        );

        if (result) {
            const response: CategoryResponseDto = new CategoryResponseDto();
            response.id = result.id;
            response.name = result.name;
            return response;
        }
        return new CategoryResponseDto();
    }
}
