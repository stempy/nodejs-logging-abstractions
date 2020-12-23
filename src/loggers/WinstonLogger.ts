import { ILogger } from "../ILogger";

const winston = require('winston');
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

/**
 * A Single ILogger implementation using the popular winston logging library
 * npm i winston
 */
export class WinstonLogger implements ILogger
{
    debug(msg: string, ...data: any[]): void {
        logger.debug(msg,data);
    }
    warn(msg: string, ...data: any[]): void {
        logger.warn(msg,data);
    }
    error(msg: string, ...data: any[]): void {
        logger.error(msg,data);
    }
    info(msg: string, ...data: any[]): void {
        logger.info(msg,data);
    }
}