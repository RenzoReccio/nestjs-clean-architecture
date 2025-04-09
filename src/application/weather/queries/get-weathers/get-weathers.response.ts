export class GetWeatherResponse {
    date: string
    temperature: number
    private constructor(date: string, temperature: number) {
        this.date = date
        this.temperature = temperature
    }
    static from(date: string, temperature: number): GetWeatherResponse {
        return new GetWeatherResponse(date, temperature)
    }
}