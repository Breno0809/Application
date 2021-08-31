const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser')

router.use(express.json())

// Importing a template
const Patients = require('../../../models/Patients')

router.get('/', (req, res) => {
    res.status(200).send({
        error: false,
        route: '/patient/',
        HTTPVerb: 'GET',
        message: 'Patient registration Area is Alright'
    })
})

/** The purpose of this method is to send all data to an Patient table record */
router.post('/', async(req, res, next) => {
    // Create patient record with <MODEL>.create()
    const user = await req.body
    const result = await Patients.create(
        user
    ).then(() => {
        // res.status(201).send('Patient record created successful')
        console.log(`> Registered patient. Welcome '${user.nomeCompleto}'`);
        return res.json({
            error: false,
            route: '/patient/',
            HTTPVerb: 'POST',
            message: `Patient record created successful. Welcome '${user.nomeCompleto}'`
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