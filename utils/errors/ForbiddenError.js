const { FORBIDDEN } = require("./constants");
const AppError = require("./AppError");

class ForbiddenError extends AppError {
  constructor(message) {
    super(message, FORBIDDEN);
  }
}

module.exports = ForbiddenError;
