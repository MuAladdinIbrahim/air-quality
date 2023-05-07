import cron from 'node-cron'
import dotenv from "dotenv"
import logger from '../../infra/logger'
import { cityAirQuality } from '../jobs/cityAirQualityJob'

cron.schedule('* * * * *', async () => {
    dotenv.config({path: `.env.cron`})
    logger.info('[ParisAirQualityScheduler started...')
    const parisCordinates = {
        lat: Number(process.env.PARIS_LAT) || 48.856613,
        lon: Number(process.env.PARIS_LON) || 2.352222
    }
    await cityAirQuality('Paris', parisCordinates)
})