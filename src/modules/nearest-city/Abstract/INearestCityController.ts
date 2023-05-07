import { IqAir } from "../../../services/iqair/iqair";
import { AirPollutionResult } from "./types/AirPollutionResult";

export interface INearestCityController {
    iqAirService: IqAir
    airPollution: (lat: number, lon: number) => Promise<AirPollutionResult>
}
