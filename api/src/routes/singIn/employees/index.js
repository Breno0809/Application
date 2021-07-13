const express = require('express'),
    router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Patient registration Area is Alright'
    })
})

router.use((req, res, next) => {
    const err = new Error('Page Not Found!')
    err.status = 404
    next(err)
})

module.exports = router