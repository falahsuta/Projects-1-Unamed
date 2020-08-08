class BadRequestError extends Error {
  statusCode = 400;

  constructor(customMessage) {
    super(customMessage);
    this.name = this.constructor.name;
    this.reasons = customMessage;
    Error.captureStackTrace(this, this.constructor);
  }

  serializeErrors() {
    return [{ message: this.reasons }];
  }
}

const contoh = 4;

// exports.ValidationError = ValidationError;
// exports.contoh = contoh;
module.exports = {
  BadRequestError,
};
