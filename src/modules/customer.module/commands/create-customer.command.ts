import {CommandHandler, ICommandHandler, IInferredCommandHandler} from "@nestjs/cqrs";
import {ApiProperty} from "@nestjs/swagger";
import { Customer } from "src/entities/customer.entity";
import {IsEmail, IsString, Length} from "class-validator";
import {Mapper} from "@automapper/core";
import {InjectMapper} from "@automapper/nestjs";
import {Command} from "src/extensions/type-safe-cqrs/command";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

export class CreateCustomerCommand extends Command<Customer> {
    @ApiProperty()
    @IsString()
    @Length(2, 50)
    public firstName: string;

    @ApiProperty()
    @IsString()
    @Length(2, 50)
    public lastName: string;

    @ApiProperty()
    @IsEmail()
    public email: string

    @ApiProperty()
    @Length(5, 100)
    public category: string
}

@CommandHandler(CreateCustomerCommand)
export class HandleCreateCustomerCommand implements IInferredCommandHandler<CreateCustomerCommand> {
    constructor(
                @InjectMapper() private mapper: Mapper, 
                @InjectRepository(Customer) private customerRepo: Repository<Customer>,
            ) {}
    async execute(command: CreateCustomerCommand): Promise<Customer> {
        const model = await this.mapper.mapAsync(command, CreateCustomerCommand, Customer);
        const createdCustomer =  await this.customerRepo.save(model);
        return createdCustomer;
    }
}
