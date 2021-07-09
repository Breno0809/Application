const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({ message: 'Historic Area is Alright' })
})

router.get('/historic/:nm', (req, res) => {
    const name = req.query
    return res.send({ message: `Hello ${name}` })
})

router.use((req, res, next) => {
    const err = new Error('Page Not Found!')
    err.status = 404
    next(err)
})

module.exports = router