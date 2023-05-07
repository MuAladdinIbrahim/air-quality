import dbClient from "../../../infra/db"
import { CustomError } from "../../../utils/CustomError"

export const getPollutedDate = async (city: string): Promise<string> => {
    try {
        const database = dbClient.db(process.env.MONGODB_NAME || 'airQuality')
        const citiesCollection = database.collection('cities')
        const res = await citiesCollection.find({city}).sort({aquis: -1}).limit(1).project({datetime: 1}).toArray()
        if(res.length === 0) {
            throw new CustomError(`No cities recorded in db for city: ${city}`, 404)
        }
        return res[0]?.datetime;
    } catch (error) {
        throw error
    }
}