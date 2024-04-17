import { web } from "./application/web";
import { logger } from "./application/logger";
const PORT = process.env.PORT ?? 4000;

web.listen(PORT, () => {
  logger.info("Listening on port: " + PORT);
});
