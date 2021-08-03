const express = require('express'),
    router = express.Router(),
    { Op } = require('sequelize')

router.use(express.json())

// Importing a template
const Patients = require('../../models/Patients')

const patientExists = obj => Object.keys(obj).length === 0

/** Patient page GET Method */
router.get('/', res => { // IT'S WORKING
    res.status(200).send({
        error: false,
        route: '/patient/',
        HTTPVerb: 'GET',
        message: 'Patient Area is Alright'
    })
})

/** Patient page GET method to display all patients by name */
router.get('/search', async(req, res) => { // IT'S WORKING
    const queryName = req.query.name
    const queryNameInSQLFormat = `%${queryName}%`
    const queryNameInHTTPFormat = queryName.replace(' ', '%20')
    const patientSearched = await Patients.findAll({
        where: {
            nomeCompleto: {
                [Op.like]: queryNameInSQLFormat
            }
        },
        attributes: ['idPatient', 'nomeCompleto', 'dataNascimento', 'urgencia']
    })

    console.log('> Looking for patient... ')
    if (patientExists(patientSearched)) {
        // Patient not found
        return res.send({
            error: false,
            patientExists: false,
            route: `/patients/search?name=${queryNameInHTTPFormat}`,
            HTTPVerb: 'GET',
            message: 'Patient not found'
        })
    } else return res.send(patientSearched)
})

/** Patient page GET method for displaying all patients */
router.get('/all', (req, res) => { // IT'S WORKING
    Patients.findAll({ // findAll() function that searches for all records
        order: [
            ['idPatient', 'ASC'] // ASC = Ascending order
        ],
        attributes: ['idPatient', 'nomeCompleto', 'dataNascimento', 'urgencia']
    }).then(patients => {
        if (patients == null) {
            return res.json({
                error: false,
                route: '/patients/all',
                HTTPVerb: 'GET',
                message: 'PATIENT MODEL IS EMPTY'
            })
        } else {
            return res.json({ patients })
        }
    }).catch(error => {
        console.error(error)
    })
})

router.post('/', (req, res) => { // IT'S WORKING
    const data = req.body
    return res.status(200).send({
        error: false,
        route: '/patients/',
        HTTPVerb: 'POST',
        message: 'Patient POST is Alright',
        body: data
    })
})

router.use((res, next) => { // IT'S WORKING
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