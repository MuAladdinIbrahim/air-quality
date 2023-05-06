import logger from "../../../infra/logger";
import { IqAir } from "../../../services/iqair/iqair";
import { CustomError } from "../../../utils/CustomError";
import { INearestCityController } from "../Abstract/INearestCityController";
import { AirPollutionResult } from "../Abstract/types/AirPollutionResult";

export class NearestCityController implements INearestCityController {
    iqAirService: IqAir
    constructor() {
        this.iqAirService = new IqAir(process.env.IQAIR_URL || "", process.env.IQAIR_KEY || "")
    }

    async AirPollution(lat: number, lon: number): Promise<AirPollutionResult> {
        try {
            const cityData = await this.iqAirService.nearestCityAirData(lat, lon)
            if (!cityData?.data?.current?.pollution) {
                throw new CustomError(`pollution key doesn't returned from IqAir, nearest city data: ${JSON.stringify(cityData)}`, 409)
            }
            const airPollutionResult: AirPollutionResult = {
                Result: { Pollution: cityData?.data?.current?.pollution }
            }
            return airPollutionResult
        } catch (error: any) {
            logger.error(`[NearestCityController][AirPollution] error: ${error}`)
            throw error
        }

    }
}