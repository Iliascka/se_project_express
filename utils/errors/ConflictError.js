const { CONFLICT } = require("./constants");
const AppError = require("./AppError");

class ConflictError extends AppError {
  constructor(message) {
    super(message, CONFLICT);
  }
}

module.exports = ConflictError;
