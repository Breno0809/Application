const express = require('express'),
    router = express.Router()

router.use(express.json())

// Importing a template
const Patients = require('../../models/Patients')

/** This purpose of this method is to display all records in the Patients table */
router.get('/', (req, res) => {
    Patients.findAll({ // findAll() function that searches for all records
        order: [
            ['idPatient', 'DESC']
        ]
    }).then(patients => {
        res.json({ patients })
    })
})

router.get('/', (req, res) => {
    res.status(200).send(patients)
    res.status(200).send({ message: 'Patient Area is Alright' })
})

router.post('/', (req, res) => {
    const data = req.body
    return res.status(200).send(data)
})

/** The purpose of this method is to send all data to an Patient table record */
router.post('/', async(req, res, next) => {
    const result = await Patients.create(
        req.body
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

router.use((req, res, next) => {
    const err = new Error('Page Not Found!')
    err.status = 404
    next(err)
})

module.exports = router