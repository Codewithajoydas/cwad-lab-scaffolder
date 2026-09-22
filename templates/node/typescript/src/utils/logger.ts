import pino from 'pino';
import { APP_NAME } from '../config/constants.js';
import { env } from '../config/env.js';

export const logger = pino({
  level: env.LOG_LEVEL,
  base: { service: APP_NAME },
  timestamp: pino.stdTimeFunctions.isoTime,
});
