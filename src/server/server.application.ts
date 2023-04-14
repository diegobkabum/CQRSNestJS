import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import RootModule from './root.module';

export default class ServerApplication {
    public async run(): Promise<void> {    
        const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(RootModule, {
            bufferLogs: true,
        });
                
        this.buildAPIDocumentation(app);
        this.log();

        await app.listen('3001','localhost');
    }

    private buildAPIDocumentation(app: NestExpressApplication): void {
        const title = 'CQRS';
        const description = 'CQRS of note API documentation';
        const version = '3.0.0';

        const options: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
            .setTitle(title)
            .setDescription(description)
            .setVersion(version)
            .addBearerAuth({
                type: 'apiKey',
                in: 'header',
                name: 'cqrs',
            })
            .build();

        const document: OpenAPIObject = SwaggerModule.createDocument(app, options);

        SwaggerModule.setup('cqrs/documentation', app, document);
    }

    private log(): void {
        Logger.log(
            `Server started on host: http://localhost:3000`,
            ServerApplication.name,
        );
    }

    public static new(): ServerApplication {
        return new ServerApplication();
    }
}
