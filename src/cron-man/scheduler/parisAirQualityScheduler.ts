import cron from 'node-cron'
import dotenv from "dotenv"
import logger from '../../infra/logger'
import { parisAirQuality } from '../jobs/parisAirQualityJob'

cron.schedule('* * * * *', async () => {
    dotenv.config({path: `.env.cron`})
    logger.info('[ParisAirQualityScheduler started...')
    await parisAirQuality()
})