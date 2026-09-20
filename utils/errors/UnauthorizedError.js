const { UNAUTHORIZED } = require("./constants");
const AppError = require("./AppError");

class UnauthorizedError extends AppError {
  constructor(message) {
    super(message, UNAUTHORIZED);
  }
}

module.exports = UnauthorizedError;
