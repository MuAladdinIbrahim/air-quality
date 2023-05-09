import { NearestCityDAL } from '../../modules/nearest-city/dal'
import { CustomError } from '../../utils/CustomError'
import request from '../_/request'

describe('/nearest-city/most-polluted-date', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    it('Should return date time successfully', async () => {
        jest.spyOn(NearestCityDAL.prototype, 'getPollutedDate').mockResolvedValue('2023-05-07T02:02:28.367Z')
        const res = await request.get('/nearest-city/most-polluted-date')
        expect(res.statusCode).toBe(200)
        expect(res.body.date).toBe('Sun May 07 2023')
        expect(typeof res.body.time).toBe('string')
    })
    
    it('Should return 404 if no cities are recorded in db', async () => {
        jest.spyOn(NearestCityDAL.prototype, 'getPollutedDate').mockRejectedValue(new CustomError(`No cities recorded in db for city: Paris`, 404))
        const res = await request.get('/nearest-city/most-polluted-date')
        expect(res.statusCode).toBe(404)
        expect(res.body.message).toBe('No cities recorded in db for city: Paris')
    })
})