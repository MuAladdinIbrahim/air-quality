import axios from 'axios'
import logger from '../infra/logger'

export class HttpRequest {
    constructor() { }

    async get(url: string, qs?: {}, headers?: {}, retries: number = 0) {
        try {
            const response = await axios.get(url, {params: qs, headers})
            return response.data
        } catch (error: any) {
            logger.error(`[HttpRequest] error ${error}`)
            throw error
        }
    }
}

export const httpRequest = new HttpRequest()
