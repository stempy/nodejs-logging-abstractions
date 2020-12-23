import { ILogger } from "../ILogger";

/**
 * A very simple console based logger implementing the ILogger interface
 */
export class ConsoleLogger implements ILogger {

    debug(msg: string, ...data: any[]): void {
        this.emitLogMessage("debug",msg,data);
    }
    warn(msg: string, ...data: any[]): void {
        this.emitLogMessage("warn",msg,data);
    }
    error(msg: string, ...data: any[]): void {
        this.emitLogMessage("error",msg,data);
    }
    info(msg: string, ...data: any[]): void {
        this.emitLogMessage("info",msg,data);
    }

    private emitLogMessage(msgType: "debug"| "info" | "warn" | "error", msg:string, data:any[]){
        const msgFormat = `[${msgType}]`;
        const msgPrefix = `${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')} ${msgFormat.padEnd(7)}`;
        
        if (data.length>0){
            console[msgType](msgPrefix, msg, data)
        } else {
            console[msgType](msgPrefix, msg);
        }
    }
}