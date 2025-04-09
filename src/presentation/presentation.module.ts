import { Module } from '@nestjs/common';
import { WeatherController } from './controllers/weather.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ApplicationModule } from 'src/application/application.module';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

@Module({
    imports: [
        CqrsModule,
        InfrastructureModule,
        ApplicationModule
    ],
    controllers: [
        WeatherController,
    ]
})
export class PresentationModule { }
