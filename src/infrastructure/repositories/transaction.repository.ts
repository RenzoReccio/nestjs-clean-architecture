import { Weather } from "src/domain/weather/weather";
import { IWeatherRepository } from "src/domain/weather/weather.repository";

export class WeatherRepository implements IWeatherRepository {
    Insert(weather: Weather) {
        console.log("Weather inserted:", weather);
        // Here you would implement the logic to insert the weather data into your database
        // For example, using an ORM like TypeORM or Mongoose, or a direct database query
    }
    Find(): Promise<Weather[]> {
        console.log("Fetching all weather data");
        // Here you would implement the logic to fetch all weather data from your database
        // For example, using an ORM like TypeORM or Mongoose, or a direct database query
        return Promise.resolve([new Weather(new Date(), 25)]); 
    }

}