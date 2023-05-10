import { Body, Controller, Get, Param, Patch, Post, Query, Delete } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiForbiddenResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { RequiredPermissions } from "src/auth/required-permission.decorator";
import { QueryBusinessPartner } from "src/modules/business-partner.module/queries/query-business-partner";
import { BusinessPartnerResponseDto } from "src/modules/business-partner.module/dtos/busines-partner-response.dto";
import { CreateNorthWindCategoryCommand } from "src/modules/business-partner.module/commands/create-northwind-category.command";
import { Categories } from "src/entities/odata/north-wind-service";
import { CategoryResponseDto } from "src/modules/business-partner.module/dtos/category-reponse.dto";
import { FindCategory } from "src/modules/business-partner.module/queries/find-category";
import { UpdateNorthWindCategoryCommand } from "src/modules/business-partner.module/commands/update-northwind-category.command";
import { string } from "joi";
import { DeleteNorthWindCategoryCommand } from "src/modules/business-partner.module/commands/delete-northwind-category.command";
import { QueryCategories } from "src/modules/business-partner.module/queries/query-categories";

@ApiTags("BusinessPartner")
@Controller("business-partner")
export class BusinessPartnerController {
    constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) { }

    @ApiOperation({ summary: "List of business partners from SAP" })
    @ApiCreatedResponse({
        description: "The list of business partners from SAP has been successfully retrieved.",
        type: BusinessPartnerResponseDto,
        isArray: true,
    })
    @ApiForbiddenResponse({ description: "Forbidden." })
    @ApiBadRequestResponse({ description: "Bad Request." })
    @RequiredPermissions("Customer.Get")
    @Get()
    async queryBusinessPartners(@Query() query: QueryBusinessPartner): Promise<BusinessPartnerResponseDto[]> {
        return await this.queryBus.execute(query);
    }

    @ApiOperation({ summary: "List of northwind categories from SAP" })
    @ApiCreatedResponse({
        description: "The list of northwind categories from SAP has been successfully retrieved.",
        type: CategoryResponseDto,
        isArray: true,
    })
    @ApiForbiddenResponse({ description: "Forbidden." })
    @ApiBadRequestResponse({ description: "Bad Request." })
    @RequiredPermissions("Customer.Get")
    @Get('/category')
    async queryCategories(@Query() query: QueryCategories): Promise<CategoryResponseDto[]> {
        return await this.queryBus.execute(query);
    }

    @ApiOperation({ summary: "Create a new category" })
    @ApiCreatedResponse({
        description: "The category has been successfully created.",
        type: CategoryResponseDto,
    })
    @ApiForbiddenResponse({ description: "Forbidden." })
    @ApiBadRequestResponse({ description: "Bad Request." })
    @RequiredPermissions("Customer.Create")
    @Post("/category")
    async createBusinesPartnerAddress(@Body() command: CreateNorthWindCategoryCommand): Promise<CategoryResponseDto> {
        return await this.commandBus.execute(command);
    }

    @ApiOperation({ summary: "Find category" })
    @ApiCreatedResponse({
        description: "The category has been successfully retrieved.",
        type: CategoryResponseDto,
        isArray: false,
    })
    @ApiForbiddenResponse({ description: "Forbidden." })
    @ApiBadRequestResponse({ description: "Bad Request." })
    @RequiredPermissions('Customer.Find')
    @Get('/category/:id')
    async findCategory(@Param() findCommand: FindCategory): Promise<CategoryResponseDto> {
        return await this.queryBus.execute(findCommand);
    }


    @ApiOperation({ summary: "Update category" })
    @ApiCreatedResponse({
        description: "The category has been successfully updated.",
        type: CategoryResponseDto,
        isArray: false,
    })
    @ApiForbiddenResponse({ description: "Forbidden." })
    @ApiBadRequestResponse({ description: "Bad Request." })
    @RequiredPermissions('Customer.Update')
    @Patch('/category/:id')
    async updateCategory(@Param('id') id: number,
        @Body() updateCategoryCommand: UpdateNorthWindCategoryCommand): Promise<CategoryResponseDto> {
        updateCategoryCommand.id = id;
        return await this.commandBus.execute(updateCategoryCommand);
    }

    @ApiOperation({ summary: "Delete category" })
    @ApiCreatedResponse({
        description: "The category has been successfully deleted.",
        type: string,
        isArray: false,
    })
    @ApiForbiddenResponse({ description: "Forbidden." })
    @ApiBadRequestResponse({ description: "Bad Request." })
    @RequiredPermissions('Customer.Delete')
    @Delete('/category/:id')
    async deleteCategory(@Param('id') id: number): Promise<string> {
        const deleteCategoryCommand: DeleteNorthWindCategoryCommand = new DeleteNorthWindCategoryCommand();
        deleteCategoryCommand.id = id;
        return await this.commandBus.execute(deleteCategoryCommand);
    }
}
