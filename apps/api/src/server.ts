import { createApp } from "./app.js";

const app = createApp();

try {
  await app.listen({ host: "0.0.0.0", port: Number(process.env.PORT ?? 3001) });
} catch (error) {
  app.log.error(error);

  process.exitCode = 1;
}
