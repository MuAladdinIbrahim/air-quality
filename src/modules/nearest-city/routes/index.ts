import { IRoute } from "../Abstract/IRoute";
import { IRouter } from "../../../infra/router";
import { INearestCityHandler } from "../Abstract/INearestCityHandler";
import { NearestCityController } from "../controllers";
import { NearestCityHandler } from "../handlers";


export class NearestCityRoute implements IRoute {
    private nearestCityHandler: INearestCityHandler
    constructor(private router: IRouter) {
        this.nearestCityHandler = new NearestCityHandler(new NearestCityController())
    }

    init() {
        this.router.add('get', '/nearest-city/air/pollution', this.nearestCityHandler.airPollution.bind(this.nearestCityHandler))
        this.router.add('get', '/nearest-city/most-polluted-time', this.nearestCityHandler.mostPollutedDate.bind(this.nearestCityHandler))
        return this.router.get()
    }
}
