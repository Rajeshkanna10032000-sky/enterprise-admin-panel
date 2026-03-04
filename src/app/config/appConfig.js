// src/app/config/appConfig.js

import env from "./env";

const appConfig = {
  appName: env.APP_NAME,
  apiBaseUrl: env.API_BASE_URL,
  defaultTheme: "light",
  pagination: {
    defaultPageSize: 10,
  },
};

export default appConfig;