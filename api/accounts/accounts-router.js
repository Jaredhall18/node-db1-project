
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

router.post('/', checkAccountNameUnique, checkAccountPayload, async (req, res, next) => {
  try {
    const newAccount = await Accounts.create(req.body)
      res.status(201).json({ name: newAccount.name.trim(), budget: newAccount.budget });
  } catch (error) {
    next(error)
  }
})

router.put('/:id', checkAccountId, checkAccountPayload, async (req, res, next) => {
 try {
   const data = await Accounts.updateById(req.params.id, req.body);
   res.status(200).json(data)
 } catch (error) {
   next(error)
 }
});

router.delete('/:id', checkAccountId, async (req, res, next) => {
  try {
    const data = await Accounts.deleteById(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => {
  console.log("Error middleware")
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;
