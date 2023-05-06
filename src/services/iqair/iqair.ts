import logger from "../../infra/logger";
import { CustomError } from "../../utils/CustomError";
import { HttpRequest } from "../../utils/HttpRequest";

export class IqAir {
    constructor(private url: string, private key: string) { }

    async nearestCityAirData(lat: number, lon: number) {
        try {
            const httpRequest = new HttpRequest()
            const response = await httpRequest.get(`${this.url}/v2/nearest_city`, { lat, lon, key: this.key }, {})
            return response
        } catch(error: any) {
            logger.error(`[IqAir][Getting NearestCityData] error: ${error}`)
            throw new CustomError(`Error while integrating with IqAir: ${error.message}`, 409)
        }
    }
}
