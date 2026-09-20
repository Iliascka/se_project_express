const { SERVER_ERROR } = require("./constants");
const AppError = require("./AppError");

class ServerError extends AppError {
  constructor(message) {
    super(message, SERVER_ERROR);
  }
}

module.exports = ServerError;
