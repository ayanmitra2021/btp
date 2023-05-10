import {PipeTransform, Injectable, Logger} from "@nestjs/common";
import {CommandHandler, QueryHandler} from "@nestjs/cqrs";
import {Observable, tap} from "rxjs";

@Injectable()
export class LoggingPipe implements PipeTransform {
    transform(value: any): Observable<any> {
        const isCommand = value.constructor.prototype instanceof CommandHandler;
        const isQuery = value.constructor.prototype instanceof QueryHandler;

        if (!isCommand && !isQuery) {
            return value;
        }

        const controller = value.constructor.name;
        const method = "handle";
        const args = value instanceof Object ? JSON.stringify(value) : "";

        const now = Date.now();

        return value
            .handle()
            .pipe(tap(() => Logger.log(`${controller}.${method}(${args}) ${Date.now() - now}ms`, LoggingPipe.name)));
    }
}
