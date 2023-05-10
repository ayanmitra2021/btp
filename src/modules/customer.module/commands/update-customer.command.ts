import {ApiProperty} from "@nestjs/swagger";
import {CommandHandler, IInferredCommandHandler} from "@nestjs/cqrs";
import {Command} from "src/extensions/type-safe-cqrs/command";
import {IsOptional, IsString, Length} from "class-validator";
import { Customer } from "src/entities/customer.entity";
import {Mapper} from "@automapper/core";
import {InjectMapper} from "@automapper/nestjs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class UpdateCustomerCommand extends Command<Customer> {
    @ApiProperty()
    public id: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    public firstName: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    public lastName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    public email: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    public category: string;
}

@CommandHandler(UpdateCustomerCommand)
export class HandleUpdateCustomerCommand implements IInferredCommandHandler<UpdateCustomerCommand> {
    constructor(
        @InjectMapper() private mapper: Mapper, 
        @InjectRepository(Customer) private customerRepo: Repository<Customer>,
    ) {}
    
    async execute(command: UpdateCustomerCommand) : Promise<Customer> {
        const model = await this.mapper.mapAsync(command, UpdateCustomerCommand, Customer);

        await this.customerRepo.update(
            command.id,
            { 
                firstName: command.firstName,
                lastName: command.lastName,
                email: command.email,
                category: command.category
            }
        )
        
        return model;
    }
}
