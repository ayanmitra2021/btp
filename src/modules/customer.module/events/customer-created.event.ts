import {Logger} from "nestjs-pino";
import {CreateCustomerCommand} from "src/modules/customer.module/commands/create-customer.command";
import {EventsHandler, IEventHandler, InvalidSagaException} from "@nestjs/cqrs";

@EventsHandler(CreateCustomerCommand)
class HandleCustomerCreatedEvent implements IEventHandler<CreateCustomerCommand> {
    constructor(private logger: Logger) {}
    handle(event: CreateCustomerCommand) {
        throw new InvalidSagaException();
        this.logger.log(`${event.firstName} ${event.lastName} is created`);
    }
}
