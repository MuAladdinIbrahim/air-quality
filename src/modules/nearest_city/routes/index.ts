import { Router } from "../../../infra/router";
import { NearestCityController } from "../controllers";
import { NearestCityHandler } from "../handlers";


export class NearestCityRoute {
    private nearestCityHandler: NearestCityHandler
    constructor(private router: Router) { 
        this.nearestCityHandler = new NearestCityHandler(new NearestCityController())
    }

    init() {
        this.router.add('get', '/nearest_city/air/pollution', this.nearestCityHandler.AirPollution.bind(this.nearestCityHandler))
        return this.router.get()
    }
}
