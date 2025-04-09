import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import { QueryBus, CommandBus } from "@nestjs/cqrs"
import { CreateWeatherCommand } from "src/application/weather/commands/create-weather/create-weather.command"
import { CreateWeatherResponse } from "src/application/weather/commands/create-weather/create-weather.response"
import { GetWeathersQuery } from "src/application/weather/queries/get-weathers/get-weathers.query"
import { GetWeatherResponse } from "src/application/weather/queries/get-weathers/get-weathers.response"

@Controller('weather')
export class WeatherController {

    constructor(
        private _queryBus: QueryBus,
        private _commandBus: CommandBus,
    ) { }

    @Post()
    async insert(@Body() weather: CreateWeatherCommand) {
        const result = await this._commandBus.execute<CreateWeatherCommand, CreateWeatherResponse>(weather)
        return result
    }

    @Get()
    async get() {
        const result = await this._queryBus.execute<GetWeathersQuery, GetWeatherResponse[]>(new GetWeathersQuery())
        return result
    }
}