import winston from 'winston'

class Logger {
    private logger: any
    constructor() {
        this.logger = winston.createLogger({
            level: "debug",
            format: winston.format.json(),
            transports: [new winston.transports.Console()],
        });
    }

    get() {
        return this.logger
    }
}

export default new Logger().get()