const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Oxygen Area is Alright'
    })
})

module.exports = router