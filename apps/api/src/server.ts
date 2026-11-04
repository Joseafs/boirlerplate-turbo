import { createApp } from './app.js';

const app = createApp();

try {
  await app.listen({ port: Number(process.env.PORT ?? 3001), host: '0.0.0.0' });
} catch (error) {
  app.log.error(error);
  process.exitCode = 1;
}
