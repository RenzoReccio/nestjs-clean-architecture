import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './config/commands';
import { Providers } from './config/providers';
import { QueryHandlers } from './config/queries';

@Module({
    imports: [
        CqrsModule,
    ],
    providers: [
        ...CommandHandlers,
        ...Providers,
        ...QueryHandlers
    ]
})
export class ApplicationModule { }
