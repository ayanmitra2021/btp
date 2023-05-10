import { UseFilters, NotFoundException, Inject, CACHE_MANAGER } from "@nestjs/common";
import {IInferredQueryHandler, IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import { ApiProperty } from "@nestjs/swagger";
import { Query } from "src/extensions/type-safe-cqrs/query";
import { Customer } from "src/entities/customer.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cache } from "cache-manager";

export class FindCustomerCommand extends Query<Customer> {
    @ApiProperty()
    public id: number;
}

@QueryHandler(FindCustomerCommand)
export class HandleFindCustomer implements IInferredQueryHandler<FindCustomerCommand> {

    constructor(
        @InjectRepository(Customer) private customerRepo: Repository<Customer>
    ){}

    async execute(query: FindCustomerCommand): Promise<Customer> {
        return await this.customerRepo.findOneBy({
            id: query.id
        });
    }
}
