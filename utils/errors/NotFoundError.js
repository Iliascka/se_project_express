const { NOT_FOUND } = require("./constants");
const AppError = require("./AppError");

class NotFoundError extends AppError {
  constructor(message) {
    super(message, NOT_FOUND);
  }
}

module.exports = NotFoundError;
