import { TestLogging } from './TestLogger';
import { ConsoleLogger } from './loggers/ConsoleLogger';
import { WinstonLogger } from './loggers/WinstonLogger';

// An example of different implementations of a standard ILogger interface
// normally, you would apply only one implementation of a logger

// 1. a simple console logger
const logger = new ConsoleLogger();
const testLogger = new TestLogging(logger);
testLogger.testLogging();

// 2. a winston based logger
const winstonLogger = new WinstonLogger();
const testLogger2 = new TestLogging(winstonLogger);
testLogger2.testLogging();

