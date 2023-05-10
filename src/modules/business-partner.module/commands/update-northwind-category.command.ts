import { ApiProperty } from "@nestjs/swagger";
import { CommandHandler, IInferredCommandHandler } from "@nestjs/cqrs";
import { Command } from "src/extensions/type-safe-cqrs/command";
import { IsNumber, IsOptional, IsString, Length } from "class-validator";
import { Customer } from "src/entities/customer.entity";
import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { CategoryResponseDto } from "../dtos/category-reponse.dto";
import { ODataRepository } from "src/odata-repository/ODataRepository";
import { Categories, northWindServiceV4 } from "src/entities/odata/north-wind-service-v4";

export class UpdateNorthWindCategoryCommand extends Command<CategoryResponseDto> {
    @ApiProperty()
    id: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    public name: string;
}

@CommandHandler(UpdateNorthWindCategoryCommand)
export class HandleUpdateNorthWindCategoryCommand implements IInferredCommandHandler<UpdateNorthWindCategoryCommand> {
    constructor(@InjectMapper() private mapper: Mapper, private northwindRepository: ODataRepository<Categories>) { }

    async execute(command: UpdateNorthWindCategoryCommand): Promise<CategoryResponseDto> {
        const { categoriesApi } = northWindServiceV4();
        const categoryEntity = categoriesApi.entityBuilder().fromJson(command);

        const response : Categories = await this.northwindRepository.update(
            categoryEntity,
            categoriesApi,
            process.env.NORTHWIND_API_ENDPOINT,
            null
        );

        return await this.mapper.mapAsync(
            response,
            Categories,
            CategoryResponseDto
        );
    }
}
