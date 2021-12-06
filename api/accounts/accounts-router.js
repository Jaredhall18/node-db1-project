
const router = require('express').Router()
const Accounts = require('./accounts-model')
const {errorHandling} = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  await Accounts.getAll()
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(err => {
      next(err)
    })
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

router.use(errorHandling)

module.exports = router;
