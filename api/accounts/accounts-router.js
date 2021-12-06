
const router = require('express').Router()
const Accounts = require('./accounts-model')
const {
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload,
} = require('./accounts-middleware')

router.get('/', (req, res, next) => {
   Accounts.getAll()
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(next);
});

router.get('/:id', checkAccountId, (req, res, next) => {
  res.json(req.account)
});

router.post('/', checkAccountNameUnique, checkAccountPayload, (req, res, next) => {
  Accounts.create(req.body)
    .then((newAccount) => {
      res.status(201).json({ name: newAccount.name.trim(), budget: newAccount.budget });
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})


router.use((err, req, res, next) => {
  console.log("Error middleware")
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;
