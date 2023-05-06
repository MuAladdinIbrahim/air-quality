import { Request, Response } from "express"
import logger from "../../../infra/logger"
import { NearestCityController } from "../controllers"
import { nearestCityValidator } from "../validation/air-pollution"

export class NearestCityHandler {
    constructor(private controller: NearestCityController) { }

    async AirPollution(req: Request, res: Response) {
        try {
            nearestCityValidator.AirPollution(req.query)
            const { lat, lon }: any = req.query
            const result = await this.controller.AirPollution(lat, lon)

            res.status(200).send(result)
        } catch (error: any) {
            logger.error({error: error.stack})
            res.status(error.code || 500).send({
                message: error.message
            })
        }

    }
}

