const express = require('express')
const router = express.Router()

router.use(express.json())

// Importing a template
const Employee = require('./src/models/Employee')

/** This purpose of this method is to display all records in the Employee table */
router.get('/', (req, res) => {
    Employee.findAll({ // findAll() function that searches for all records
        order: [
            ['idEmployee', 'DESC']
        ]
    }).then(employee => {
        res.json({ employee })
    })
})

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Employee Area is Alright'
    })
})

/** The purpose of this method is to send all data to an Employee table record */
router.post('/', async(req, res, next) => {
    const result = await Employee.create(
        req.body
    ).then(() => {
        // res.status(201).send('Patient record created successful')
        return res.json({
            error: false,
            message: 'Patient record created successful'
        })
    }).catch(err => {
        // console.error(err);
        return res.status(400).json({
            error: true,
            message: 'Error: Patient record created unsuccessful'
        })
    })
})

router.use((req, res, next) => {
    const err = new Error('Page Not Found!')
    err.status(404)
    next(err)
})

module.exports = router