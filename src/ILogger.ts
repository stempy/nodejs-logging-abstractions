/**
 * Core ILogger interface for injecting into classes
 */
export interface ILogger {
    debug(msg:string, ...data: any[]):void;
    warn(msg:string, ...data: any[]):void;
    error(msg:string, ...data: any[]):void;
    info(msg:string, ...data: any[]):void;
}
