const { BAD_REQUEST } = require("./constants");
const AppError = require("./AppError");

class BadRequestError extends AppError {
  constructor(message) {
    super(message, BAD_REQUEST);
  }
}

module.exports = BadRequestError;
