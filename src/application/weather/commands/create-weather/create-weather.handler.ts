import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { CreateWeatherCommand } from "./create-weather.command"
import { CreateWeatherResponse } from "./create-weather.response"
import { IWeatherRepository } from "src/domain/weather/weather.repository"
import { Weather } from "src/domain/weather/weather"

@CommandHandler(CreateWeatherCommand)
export class CreateWeatherHandler implements ICommandHandler<CreateWeatherCommand, CreateWeatherResponse> {
    constructor(
        private _weatherRepository: IWeatherRepository
    ) { }
    async execute(command: CreateWeatherCommand): Promise<CreateWeatherResponse> {
        const weather = new Weather(new Date(command.date), command.temperature)
        await this._weatherRepository.Insert(weather)
        return CreateWeatherResponse.from(weather.Date.toISOString(), weather.Temperature)
    }
}