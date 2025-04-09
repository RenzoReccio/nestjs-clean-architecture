import { Provider } from "@nestjs/common";
import { IWeatherRepository } from "src/domain/weather/weather.repository";
import { WeatherRepository } from "src/infrastructure/repositories/transaction.repository";

export const Providers: Provider[] = [
    { provide: IWeatherRepository, useClass: WeatherRepository },
]