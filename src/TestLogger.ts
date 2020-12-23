import { ILogger } from './ILogger';

export class TestLogging
{
    private log: ILogger;
    
    constructor(logger:ILogger){
      this.log = logger;
    }

    public testLogging() {
        this.log.debug('test debug logging');
        this.log.info('test info logging');
        this.log.warn('a warning has occurred');
        this.log.error('an error has occured');

        // test a structured log type message
        this.log.info('test log with data', {"id":99, "text":"sometext"});
        this.log.info('another format for structured logging %s',"sometext")
    }
}