// src/app/error/errorHandler.js

export function handleApiError(error) {
  if (error.response) {
    return error.response.data?.message || "Server Error";
  }

  if (error.request) {
    return "Network Error. Please check connection.";
  }

  return "Unexpected Error";
}