import Fastify from 'fastify';
import { healthSchema } from '@repo/contracts/health';

export function createApp() {
  const app = Fastify();

  app.get('/health', async () => healthSchema.parse({ status: 'ok' }));

  return app;
}
