import dbClient from "../../infra/db"
import logger from "../../infra/logger"
import { AirPollutionResult } from "../../modules/nearest-city/Abstract/types/AirPollutionResult"
import { NearestCityController } from "../../modules/nearest-city/controllers"

export const cityAirQuality = async (city: string, cityCordinates: {lat: number, lon: number}) => {
    try {
        const data: AirPollutionResult = await (new NearestCityController()).airPollution(cityCordinates.lat, cityCordinates.lon)
        const pollution = data?.Result?.Pollution
        await dbClient.connect()
        const database = dbClient.db(process.env.MONGODB_NAME || 'airQuality')
        const citiesCollection = database.collection('cities')
        const document: CityModel = {
            city,
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