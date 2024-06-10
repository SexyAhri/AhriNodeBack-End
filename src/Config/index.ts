import { loggerConfig } from "./logger";
import { controllersConfig } from "./controllers";
import { modelsConfig } from "./models";
import { publicConfig } from "./public";
import { routesConfig } from "./routes";
import { utilsConfig } from "./utils";
import { viewsConfig } from "./views";
import { sequelize } from "./database";
export const config = {
  logger: loggerConfig,
  controllers: controllersConfig,
  models: modelsConfig,
  public: publicConfig,
  routes: routesConfig,
  utils: utilsConfig,
  views: viewsConfig,
  database: sequelize,
};
