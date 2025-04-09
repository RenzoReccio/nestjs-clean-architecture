import { IQueryHandler, QueryHandler } from "@nestjs/cqrs"
import { IWeatherRepository } from "src/domain/weather/weather.repository"
import { CreateWeatherResponse } from "../../commands/create-weather/create-weather.response"
import { GetWeathersQuery } from "./get-weathers.query"
import { GetWeatherResponse } from "./get-weathers.response"

@QueryHandler(GetWeathersQuery)
export class GetWeathersHandler implements IQueryHandler<GetWeathersQuery, GetWeatherResponse[]> {
    constructor(
        private _weatherRepository: IWeatherRepository
    ) { }
    async execute(query: GetWeathersQuery): Promise<GetWeatherResponse[]> {
        const weathers = await this._weatherRepository.Find()
        return weathers.map(weather=>CreateWeatherResponse.from(weather.Date.toISOString(), weather.Temperature))
    }
}