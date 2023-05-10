import { ApiProperty } from "@nestjs/swagger";
import { CommandHandler, IInferredCommandHandler } from "@nestjs/cqrs";
import { Command } from "src/extensions/type-safe-cqrs/command";
import { IsNumber } from "class-validator";
import { ODataRepository } from "src/odata-repository/ODataRepository";
import { Categories, northWindServiceV4 } from "src/entities/odata/north-wind-service-v4";
import { Transform } from "class-transformer";
import { toNumber } from "src/utilities/helper.utilities";

export class DeleteNorthWindCategoryCommand extends Command<string> {
    @ApiProperty()
    @IsNumber()
    @Transform(({value}) => toNumber(value))
    id: number;
}

@CommandHandler(DeleteNorthWindCategoryCommand)
export class HandleDeleteNorthWindCategoryCommand implements IInferredCommandHandler<DeleteNorthWindCategoryCommand> {
    constructor(private northwindRepository: ODataRepository<Categories>) { }

    async execute(deleteCommand: DeleteNorthWindCategoryCommand): Promise<string> {
        const { categoriesApi } = northWindServiceV4();

        const response = await this.northwindRepository.delete(
            deleteCommand.id,
            categoriesApi,
            process.env.NORTHWIND_API_ENDPOINT,
            null
        );
        
        return 'Delete was successful...';
    }
}
