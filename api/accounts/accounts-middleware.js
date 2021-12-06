exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.errorHandling = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: `There was an error processing your request: ${err.message}`,
    stack: err.stack,
})
}
