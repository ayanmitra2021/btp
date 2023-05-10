import { QueryCustomer } from "./../modules/customer.module/queries/query-customer";
import { Body, Controller, Get, Param, Patch, Post, Query, Delete } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiForbiddenResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateCustomerCommand } from "src/modules/customer.module/commands/create-customer.command";
import { Customer } from "src/entities/customer.entity";
import { RequiredPermissions } from "src/auth/required-permission.decorator";
import { FindCustomerCommand } from "src/modules/customer.module/queries/find-customer";
import { ExpressQuery } from "@tool-kid/express-query-adapter/src/express-query";
import { UpdateCustomerCommand } from "src/modules/customer.module/commands/update-customer.command";
import { DeleteCustomerCommand } from "src/modules/customer.module/commands/delete-customer.command";

@ApiTags("Customer")
@Controller("customer")
export class CustomerController {

    constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

    @ApiOperation({summary: "Create a new customer"})
    @ApiCreatedResponse({
        description: "The customer has been successfully created.",
        type: Customer,
    })
    @ApiForbiddenResponse({description: "Forbidden."})
    @ApiBadRequestResponse({description: "Bad Request."})
    @RequiredPermissions('Customer.Create')
    @Post()
    async createCustomer(@Body() createCustomerCommand: CreateCustomerCommand): Promise<Customer> {
        return await this.commandBus.execute(createCustomerCommand);
    }

    @ApiOperation({summary: "List of customers"})
    @ApiCreatedResponse({
        description: "The list of customers has been successfully retrieved.",
        type: Customer,
        isArray: true,
    })
    @ApiForbiddenResponse({description: "Forbidden."})
    @ApiBadRequestResponse({description: "Bad Request."})
    @RequiredPermissions('Customer.Get')
    @Get()
    async queryCustomers(@Query() query: QueryCustomer): Promise<Customer[]> {
        return await this.queryBus.execute(query);
    }
    // async queryCustomers(@Query() query: ExpressQuery): Promise<Customer[]> {
    //     const queryCustomer: QueryCustomer = new QueryCustomer();
    //     queryCustomer.query = query
    //     return await this.queryBus.execute(queryCustomer);
    // }
   
    @ApiOperation({summary: "Find customers"})
    @ApiCreatedResponse({
        description: "The customer has been successfully retrieved.",
        type: Customer,
        isArray: false,
    })
    @ApiForbiddenResponse({description: "Forbidden."})
    @ApiBadRequestResponse({description: "Bad Request."})
    @RequiredPermissions('Customer.Find')
    @Get('/:id')
    async findCustomers(@Param() parameter: FindCustomerCommand): Promise<Customer> {
        return await this.queryBus.execute(parameter);
    }

    @ApiOperation({summary: "Update customers"})
    @ApiCreatedResponse({
        description: "The customer has been successfully updated."
    })
    @ApiForbiddenResponse({description: "Forbidden."})
    @ApiBadRequestResponse({description: "Bad Request."})
    @RequiredPermissions('Customer.Update')
    @Patch('/:id')
    async updateCustomer(@Param() customerId: number, 
                        @Body() updateCustomerCommand: UpdateCustomerCommand) :  Promise<Customer> {
        updateCustomerCommand.id = customerId;
        return await this.commandBus.execute(updateCustomerCommand);
    }

    @ApiOperation({summary: "Delete customers"})
    @ApiCreatedResponse({
        description: "The customer has been successfully deleted."
    })
    @ApiForbiddenResponse({description: "Forbidden."})
    @ApiBadRequestResponse({description: "Bad Request."})
    @RequiredPermissions('Customer.Delete')
    @Delete('/:id')
    async deleteCustomer(@Param() deleteCustomerCommand: DeleteCustomerCommand)  {
        await this.commandBus.execute(deleteCustomerCommand);
    }
}

