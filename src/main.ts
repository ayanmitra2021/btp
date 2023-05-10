import {Logger, PinoLogger} from "nestjs-pino";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(
        AppModule
    );

    const config = new DocumentBuilder()
        .setTitle("Wood Duck Api")
        .setDescription("Wood Duck API description")
        .setVersion("1.0")
        .addTag("wood-duck")
        .build();

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
        })
    );

    app.setGlobalPrefix("api");
    app.enableCors({
        origin: "*", //this should be updated before deployment
        methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        exposedHeaders: ["Content-Range", "X-Content-Range"],
        preflightContinue: false,
        optionsSuccessStatus: 204,
    });
    app.useLogger(app.get(Logger));

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("swagger", app, document);

    await app.listen(process.env.PORT || 3333);
}
bootstrap().catch(console.error);
