
import { IsNumber, IsDateString } from "class-validator"
export class CreateWeatherCommand {
    @IsDateString()
    date: string

    @IsNumber()
    temperature: number
}