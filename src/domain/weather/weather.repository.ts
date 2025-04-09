import { Weather } from "./weather";

export abstract class IWeatherRepository {
    abstract Insert(weather: Weather);
    abstract Find(): Promise<Weather[]>;
}