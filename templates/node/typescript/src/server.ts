import { createApp } from './app.js';
import { env } from './config/env.js';
import { logger } from './utils/logger.js';

const server = createApp();

server.listen(env.PORT, env.HOST, () => {
  logger.info(`Server listening on http://${env.HOST}:${env.PORT}`);
});

function shutdown(signal: string): void {
  logger.info({ signal }, 'Shutdown signal received');

  server.close((error) => {
    if (error) {
      logger.error(error, 'Failed to close server cleanly');
      process.exitCode = 1;
      return;
    }

    logger.info('Server closed');
  });
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
