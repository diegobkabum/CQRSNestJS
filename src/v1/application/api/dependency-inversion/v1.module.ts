import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { EntityModule } from './entity.module';
import { DataBaseModule } from './database.module';
import { AppController } from '../controller/app/app.controller';
import { AppService } from '../app.service';

const modules = [DataBaseModule, EntityModule];

@Module({
    imports: [      
        RouterModule.register([
            {
                path: 'cqrs/v1',
                children: modules,
            },
        ]),  
        ...modules,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export default class V1Module {}
