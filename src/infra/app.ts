import express from 'express'
import cors from 'cors'
import logger from './logger'

export class App implements IApp {
    expressApp: express.Application
    constructor() {
        this.expressApp = express()
        this.expressApp.use(express.urlencoded({ extended: true }))
        this.expressApp.use(cors())
        this.expressApp.use(express.json())
     }
    listen(port: number) {
        this.expressApp.listen(port, () => {
            logger.info(`App is up and running on ${port}`)
        })
    }

    get() {
        return this.expressApp;
    }

    useRouter(router: express.Router | express.Router[]) {
        this.expressApp.use(router)
    }
}

export interface IApp {
    expressApp: express.Application
    listen: (port: number) => void
    get: () => express.Application
    useRouter: (router: express.Router | express.Router[]) => void
}