import request from '../_/request'
import { IqAir } from '../../services/iqair/iqair'
import { CustomError } from '../../utils/CustomError'
import { HttpRequest } from '../../utils/HttpRequest'

describe('/nearest-city/air/pollution', () => {
    beforeEach(() => {
    })
    afterEach(() => {
        jest.restoreAllMocks()
    })
    it('Should return validation error as lat, lon are not provided', async () => {
        const res = await request.get('/nearest-city/air/pollution')
        expect(res.statusCode).toBe(400)
        expect(res.body.message.includes('Error validating incoming request')).toBeTruthy()
    })
    it('Should return pollution data successfully', async () => {
        jest.spyOn(IqAir.prototype, 'nearestCityAirData').mockResolvedValue({
            data: {
                current: {
                    pollution: {
                        ts: "2023-05-06T09:00:00.000Z",
                        aqius: 53,
                        mainus: "p2",
                        aqicn: 19,
                        maincn: "p2"
                    }
                }
            }
        })
        const [lat, lon] = [31.21564, 29.95527]
        const res = await request.get(`/nearest-city/air/pollution?lat=${lat}&lon=${lon}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toMatchObject({
            Result: {
                Pollution: {
                    ts: "2023-05-06T09:00:00.000Z",
                    aqius: 53,
                    mainus: "p2",
                    aqicn: 19,
                    maincn: "p2"
                }
            }
        })
    })

    it('Should return 409 as iqAir is not available for any reason', async () => {
        jest.spyOn(HttpRequest.prototype, 'get').mockRejectedValue(new CustomError('error', 409))
        const [lat, lon] = [31.21564, 29.95527]
        const res = await request.get(`/nearest-city/air/pollution?lat=${lat}&lon=${lon}`)
        expect(res.statusCode).toBe(409)
        expect(res.body.message.includes('Error while integrating with IqAir')).toBeTruthy()
    })
})