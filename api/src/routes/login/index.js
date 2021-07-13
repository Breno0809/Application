const express = require('express'),
    router = express.Router()

router.use(express.json())

/** This route serves to validate the user's login */
router.get('/', res => {
    res.status(200).send({ message: 'Login Area is Alright' })
})

router.post('/', async(req, res) => {
    const response = await req.body
    data = response.json()
    return res.json({
        error: false,
        message: 'Access allowed'
    })
})

router.use((req, res, next) => {
    const err = new Error('Page Not Found!')
    err.status = 404
    next(err)
})

module.exports = router