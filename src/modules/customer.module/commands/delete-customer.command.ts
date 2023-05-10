import {ApiProperty} from "@nestjs/swagger";
import {CommandHandler, IInferredCommandHandler} from "@nestjs/cqrs";
import {Command} from "src/extensions/type-safe-cqrs/command";
import { Customer } from "src/entities/customer.entity";
import {Mapper} from "@automapper/core";
import {InjectMapper} from "@automapper/nestjs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class DeleteCustomerCommand extends Command<void> {
    @ApiProperty()
    public id: number;
}

@CommandHandler(DeleteCustomerCommand)
export class HandleDeleteCustomerCommand implements IInferredCommandHandler<DeleteCustomerCommand> {
    constructor(
        @InjectRepository(Customer) private customerRepo: Repository<Customer>,
    ) {}
    
    async execute(command: DeleteCustomerCommand) {
        await this.customerRepo.softDelete(command.id)
    }
}
