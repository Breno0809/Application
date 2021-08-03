const express = require('express'),
    router = express.Router()

router.use(express.json())

// Importing a template
const Employee = require('../../../models/Employee')

router.get('/', res => {
    res.status(200).send({
        error: false,
        route: '/employees/',
        HTTPVerb: 'GET',
        message: 'Employee registration Area is Alright'
    })
})

/** The purpose of this method is to send all data to an Employee table record */
router.post('/', async(req, res) => {
    const user = req.body
    const result = await Employee.create(
        user
    ).then(() => {
        // res.status(201).send('Patient record created successful')
        console.log("> Registered patient");
        return res.json({
            error: false,
            message: 'Patient record created successful'
        })
    }).catch(err => {
        // console.error(err);
        console.log(`> There was an error in the patient's registration`);
        return res.status(400).json({
            error: true,
            message: 'Error: Patient record created unsuccessful'
        })
    })
})

router.use((req, res, next) => { // IT'S WORKING
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