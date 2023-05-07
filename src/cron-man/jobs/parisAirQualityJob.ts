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
        console.log(pollution)
        // save pollution into db
    } catch (error) {

    }

}