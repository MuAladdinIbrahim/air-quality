import { IRouter } from "../../../infra/router";
import { INearestCityHandler } from "../Abstract/INearestCityHandler";
import { NearestCityController } from "../controllers";
import { NearestCityHandler } from "../handlers";


export class NearestCityRoute {
    private nearestCityHandler: INearestCityHandler
    constructor(private router: IRouter) { 
        this.nearestCityHandler = new NearestCityHandler(new NearestCityController())
    }

    init() {
        this.router.add('get', '/nearest_city/air/pollution', this.nearestCityHandler.AirPollution.bind(this.nearestCityHandler))
        return this.router.get()
    }
}
