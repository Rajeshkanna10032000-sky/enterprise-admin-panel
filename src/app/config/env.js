// src/app/config/env.js

const env = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
  APP_NAME: import.meta.env.VITE_APP_NAME || "MyApp",
  NODE_ENV: import.meta.env.MODE || "development",
};

export default env;