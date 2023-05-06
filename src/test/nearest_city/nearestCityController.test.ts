import { NearestCityController } from "../../modules/nearest_city/controllers"
import { IqAir } from "../../services/iqair/iqair"
import { CustomError } from "../../utils/CustomError"
import { HttpRequest, httpRequest } from "../../utils/HttpRequest"
import { AirPollutionResult } from "..//../modules/nearest_city/Abstract/types/AirPollutionResult"

describe('Nearest City Controller', () => {
    const nearestCityController = new NearestCityController()
    describe('AirPollution', () => {
        const [lat, lon] = [31.21564, 29.95527]
        beforeEach(()=> {
            jest.restoreAllMocks()
        })

        it('Should return AirPollutionResult', async () => {
            jest.spyOn(IqAir.prototype,'nearestCityAirData').mockResolvedValue({
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
            const result = await nearestCityController.AirPollution(lat, lon)
            expect(result).toHaveProperty('Result')
            expect(result).toMatchObject({
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

        it('Should throw error [integrating with iqair]', async () => {
            try {
                jest.spyOn(HttpRequest.prototype, 'get').mockRejectedValue(new CustomError('http call error', 409))
                await nearestCityController.AirPollution(lat, lon)
            } catch (error: any) {
                expect(error.message).toBe(`Error while integrating with IqAir: http call error`)
                expect(error.code).toBe(409)
            }
        })

        it('Should throw error [pollution key not found] if data returned from iqair is not formatted right', async () => {
            try {
                jest.spyOn(IqAir.prototype,'nearestCityAirData').mockResolvedValue({ data: {} })
                await nearestCityController.AirPollution(lat, lon)
            } catch (error: any) {
                expect(error.message).toBe(`pollution key doesn't returned from IqAir, nearest city data: ${JSON.stringify({ data: {} })}`)
            }
        })
    })
})