export class CreateWeatherResponse {
    date: string
    temperature: number
    private constructor(date: string, temperature: number) {
        this.date = date
        this.temperature = temperature
    }
    static from(date: string, temperature: number): CreateWeatherResponse {
        return new CreateWeatherResponse(date, temperature)
    }
}