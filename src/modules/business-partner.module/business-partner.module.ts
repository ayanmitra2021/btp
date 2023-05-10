import { AutomapperModule } from "@automapper/nestjs";
import { classes } from "@automapper/classes";
import { CqrsModule } from "@nestjs/cqrs";
import { BusinessPartnerController } from "src/controllers/business-partner.controller";
import { Module } from "@nestjs/common";
import { HandleQueryBusinessPartner } from "./queries/query-business-partner";
import { MapBusinesPartnerToResponse } from "./maps/map-businesss-partner-response";
import { ODataRepository } from "src/odata-repository/ODataRepository";
import { HandleNorthWindCategoryCreateCommand } from "./commands/create-northwind-category.command";
import { HandleFindCategory } from "./queries/find-category";
import { HandleUpdateNorthWindCategoryCommand } from "./commands/update-northwind-category.command";
import { HandleDeleteNorthWindCategoryCommand } from "./commands/delete-northwind-category.command";
import { MapCategoriesToResponse } from "./maps/map-categories-response";
import { HandleQueryCategories } from "./queries/query-categories";

@Module({
    imports: [CqrsModule, AutomapperModule.forRoot({ strategyInitializer: classes() })],
    controllers: [BusinessPartnerController],
    providers: [
        ODataRepository,
        HandleQueryBusinessPartner,
        HandleNorthWindCategoryCreateCommand,
        HandleUpdateNorthWindCategoryCommand,
        HandleDeleteNorthWindCategoryCommand,
        HandleFindCategory,
        HandleQueryCategories,
        MapBusinesPartnerToResponse,
        MapCategoriesToResponse
    ],
    exports: [
        HandleQueryBusinessPartner, 
        HandleNorthWindCategoryCreateCommand, 
        HandleFindCategory, 
        HandleQueryCategories,
        HandleUpdateNorthWindCategoryCommand, 
        HandleDeleteNorthWindCategoryCommand
    ],
})
export class BusinessPartnerModule { }
