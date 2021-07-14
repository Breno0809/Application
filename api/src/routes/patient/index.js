const express = require('express'),
    router = express.Router(),
    { Op } = require('sequelize')

router.use(express.json())

// Importing a template
const Patients = require('../../models/Patients')

/** Patient page GET Method */
router.get('/', (req, res) => { // IT'S WORKING
    res.status(200).send({
        error: false,
        route: '/patient/',
        HTTPVerb: 'GET',
        message: 'Patient Area is Alright'
    })
})

/** Patient page GET method to display all patients by name */
router.get('/nome/:name', (req, res) => { // IT'S WORKING
    let queryName = req.params.name
    Patients.findAll({
        where: {
            nome: queryName
        },
        attributes: ['idPatient', 'nome', 'sobrenome', 'urgencia']
    }).then(patients => {
        // Patient Validation
        console.log(patients);
        if (patients == null) { // If patient EXISTS
            return res.json({
                error: false,
                route: '/patient/nome',
                HTTPVerb: 'GET',
                message: 'Patient Area is Alright'
            })
        } else { // If the patient doesn't EXISTS
            return res.json({
                patients,
                message: `Person not found. '${queryName}' not found in Database`
            })
        }
    })
})

/** Patient page GET method for displaying all patients */
router.get('/all', (req, res) => { // IT'S WORKING
    Patients.findAll({ // findAll() function that searches for all records
        order: [
            ['idPatient', 'ASC'] // ASC = Ascending order
        ]
    }).then(patients => {
        if (patients == null) {
            return res.json({
                error: false,
                route: '/patient/all',
                HTTPVerb: 'GET',
                message: 'PATIENT MODEL IS EMPTY'
            })
        } else {
            return res.json({ patients })
        }
    })
})

router.post('/', (req, res) => { // IT'S WORKING
    const data = req.body
    return res.status(200).send({
        error: false,
        route: '/patient/',
        HTTPVerb: 'POST',
        message: 'Patient POST is Alright',
        body: data
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