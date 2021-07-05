const express = require('express')
const router = express.Router()

const patients = require('../../../bin/patients.json')

router.use(express.json())

router.get('/', (req, res) => {
    res.status(200).send(patients)
    // res.status(200).send({ message: 'Patient Area is Alright' })
})

router.post('/', (req, res) => {
    const data = req.body
    return res.status(200).send(data)
})

router.use((req, res, next) => {
    const err = new Error('Page Not Found!')
    err.status = 404
    next(err)
})

module.exports = router