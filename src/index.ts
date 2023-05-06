import { HealthRoute } from "./infra/health";
import { App } from "./infra/app";
import { Router } from "./infra/router";
import { NearestCityRoute } from "./modules/nearest_city/routes";
import dotenv from "dotenv"

function initRoutes() {
    const router = new Router()
    const routes = [
        new HealthRoute(router).init(),
        new NearestCityRoute(router).init()
    ]
    App.useRouter(routes)
}

async function bootstrap() {
    dotenv.config({path: `.env.stage.${process.env.STAGE}`})
    await App.listen(Number(process.env.PORT) || 3000)
    initRoutes()
}

bootstrap()