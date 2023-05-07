import cron from 'node-cron'
import logger from '../../infra/logger'
import { parisAirQuality } from '../jobs/parisAirQualityJob'

cron.schedule('9 * * * *', async () => {
    logger.info('[ParisAirQualityScheduler started...')
    await parisAirQuality()
})