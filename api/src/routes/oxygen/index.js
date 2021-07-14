const express = require('express'),
    router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Oxygen Area is Alright'
    })
})

router.use((req, res, next) => {
    res.status(404).send({
        error: true,
        typeError: 404,
        HTTPVerb: null,
        message: 'Page not Found'
    })
    const err = new Error('> Page Not Found!')
    err.status = 404
    next(err)
})

module.exports = router