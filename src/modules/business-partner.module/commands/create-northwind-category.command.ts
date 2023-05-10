import { CommandHandler, ICommandHandler, IInferredCommandHandler } from "@nestjs/cqrs";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString, Length } from "class-validator";
import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { Command } from "src/extensions/type-safe-cqrs/command";
import { ODataRepository } from "src/odata-repository/ODataRepository";
import { Categories, northWindServiceV4 } from "src/entities/odata/north-wind-service-v4";
import { CategoryResponseDto } from "../dtos/category-reponse.dto";

export class CreateNorthWindCategoryCommand extends Command<CategoryResponseDto> {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsString()
    name: string;
}

@CommandHandler(CreateNorthWindCategoryCommand)
export class HandleNorthWindCategoryCreateCommand implements IInferredCommandHandler<CreateNorthWindCategoryCommand> {
    constructor(@InjectMapper() private mapper: Mapper, private northwindRepository: ODataRepository<Categories>) { }

    async execute(command: CreateNorthWindCategoryCommand): Promise<CategoryResponseDto> {
        const { categoriesApi } = northWindServiceV4();
        const categoryEntity = categoriesApi.entityBuilder().fromJson(command);
        
        const response: Categories = await this.northwindRepository.create(
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
