import { HealthRoute } from "./infra/health";
import { App, IApp } from "./infra/app";
import { Router } from "./infra/router";
import { NearestCityRoute } from "./modules/nearest_city/routes";
import dotenv from "dotenv"

function initRoutes(app: IApp) {
    const router = new Router()
    const routes = [
        new HealthRoute(router).init(),
        new NearestCityRoute(router).init()
    ]
    app.useRouter(routes)
}

function bootstrap() {
    dotenv.config({path: `.env.stage.${process.env.STAGE}`})
    const app = new App()
    initRoutes(app)
    app.listen(Number(process.env.PORT) || 3000)
    return app.get()
}

const server = bootstrap()

export default server