const express = require('express')
const router = express.Router()

router.get('/', res => {
    res.status(200).send({ message: 'Login Area is Alright' })
})

router.post('/', (req, res) => {
    const response = req.body
    data = response.json()
    return res.json({
        message: `Helo ${name}`,
        secretMessage: `Your secret message is ${password}`
    })
})

router.use((req, res, next) => {
    const err = new Error('Page Not Found!')
    err.status(404)
    next(err)
})

module.exports = router