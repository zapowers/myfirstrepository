const router = require('express').Router()

router.use('/creatures', require('./creatures'))

router.use('/parties', require('./parties'))

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
