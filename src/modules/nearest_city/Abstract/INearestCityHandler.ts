import { INearestCityController } from "./INearestCityController";

export interface INearestCityHandler {
    AirPollution: (req: any, res: any) => Promise<any>
}