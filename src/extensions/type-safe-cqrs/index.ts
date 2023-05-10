import {ICommandHandler, IQueryHandler} from "@nestjs/cqrs";
import {Command} from "./command";
import {Query} from "./query";

declare module "@nestjs/cqrs/dist/query-bus" {
    export interface QueryBus {
        execute<T>(query: Query<T>): Promise<T>;
    }

    export type IInferredQueryHandler<QueryType extends Query<unknown>> = QueryType extends Query<infer ResultType>
        ? IQueryHandler<QueryType, ResultType>
        : never;
}

declare module "@nestjs/cqrs/dist/command-bus" {
    export interface CommandBus {
        execute<T>(command: Command<T>): Promise<T>;
    }

    export type IInferredCommandHandler<CommandType extends Command<unknown>> = CommandType extends Command<
        infer ResultType
    >
        ? ICommandHandler<CommandType, ResultType>
        : never;
}

export * from "@nestjs/cqrs";
