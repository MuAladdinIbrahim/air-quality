import logger from "../../../infra/logger";
import { IqAir } from "../../../services/iqair/iqair";
import { CustomError } from "../../../utils/CustomError";

export class NearestCityController {
    iqAirService: IqAir
    constructor() {
        this.iqAirService = new IqAir(process.env.IQAIR_URL || "", process.env.IQAIR_KEY || "")
    }

    async AirPollution(lat: number, lon: number) {
        try {
            const cityData = await this.iqAirService.nearestCityAirData(lat, lon)
            if (!cityData.data.current.pollution) {
                throw new CustomError(`pollution key doesn't returned from IqAir, nearest city data: ${cityData}`, 409)
            }
            return { Result: { Pollution: cityData?.data?.current?.pollution } }
        } catch (error: any) {
            logger.error(`[NearestCityController][AirPollution] error: ${error}`)
            throw error
        }

    }
}