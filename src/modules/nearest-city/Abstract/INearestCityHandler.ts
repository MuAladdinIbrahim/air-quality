export interface INearestCityHandler {
    airPollution: (req: any, res: any) => Promise<any>
    mostPollutedDate: (req: any, res: any) => Promise<any>
}