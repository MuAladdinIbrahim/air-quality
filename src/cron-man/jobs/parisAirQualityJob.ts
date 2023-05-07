import dbClient from "../../infra/db"
import logger from "../../infra/logger"
import { AirPollutionResult } from "../../modules/nearest-city/Abstract/types/AirPollutionResult"
import { NearestCityController } from "../../modules/nearest-city/controllers"

export const parisAirQuality = async () => {
    const parisCordinates = {
        lat: Number(process.env.PARIS_LAT) || 48.856613,
        lon: Number(process.env.PARIS_LON) || 2.352222
    }
    try {
        const data: AirPollutionResult = await (new NearestCityController()).airPollution(parisCordinates.lat, parisCordinates.lon)
        const pollution = data?.Result?.Pollution
        await dbClient.connect()
        const database = dbClient.db(process.env.MONGODB_NAME || 'airQuality')
        const citiesCollection = database.collection('cities')
        const document: CityModel = {
            city: 'Paris',
            datetime: new Date().toISOString(),
            ...pollution
        }
        const res = await citiesCollection.insertOne(document)
        if(res.acknowledged) {
            logger.info(`document inserted successfully, _id: ${res.insertedId}`)
        }
    } catch (error) {
        logger.error(`[parisAirQualityJob] ${error}`)
    } finally {
        dbClient.close()
    }
}

type CityModel = {
    city: string
    datetime: string
    ts: string,
    aquis: number,
    mainus: string,
    aqicn: number,
    maincn: string
}