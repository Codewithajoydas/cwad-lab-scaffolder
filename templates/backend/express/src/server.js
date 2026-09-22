import app from './app.js';

const port = Number(process.env.PORT ?? '{PORT}');
const server = app.listen(port, () => {
  console.log(`API listening on ${port}`);
});

const shutdown = () => server.close(() => process.exit(0));
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
