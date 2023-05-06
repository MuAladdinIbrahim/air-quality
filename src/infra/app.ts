import express from 'express'
import cors from 'cors'
import logger from './logger'

export class App {
    private static app: express.Application
    constructor() { }
    static async listen(port: number) {
        App.app = express()
        App.app.use(express.urlencoded({ extended: true }))
        App.app.use(cors())
        App.app.use(express.json())

        App.app.listen(port, () => {
            logger.info(`App is up and running on ${port}`)
        })
    }

    static get() {
        return App.app;
    }

    static useRouter(router: express.Router | express.Router[]) {
        App.app.use(router)
    }
}