import { healthSchema } from "@repo/contracts/health";
import Fastify from "fastify";

export function createApp() {
  const app = Fastify();

  app.get("/health", () => healthSchema.parse({ status: "ok" }));

  return app;
}
