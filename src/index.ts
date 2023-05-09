import { HealthRoute } from "./infra/health";
import { App, IApp } from "./infra/app";
import { Router } from "./infra/router";
import { NearestCityRoute } from "./modules/nearest-city/routes";
import dotenv from "dotenv"
import { checkEnvVar } from "./infra/envValidator";

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
    checkEnvVar()
    const app = new App()
    initRoutes(app)
    if(process.env.NODE_ENV !== 'test') {
        app.listen(Number(process.env.PORT) || 3000)
    }
    return app.get()
}

const server = bootstrap()

export default server