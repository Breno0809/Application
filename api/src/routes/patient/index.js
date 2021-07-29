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
    let queryName = req.query.name
    let patientSearched = await Patients.findAll({
        where: {
            nomeCompleto: queryName
        },
        attributes: ['idPatient', 'nomeCompleto', 'dataNascimento', 'urgencia']
    })
    const queryNameInHTTPFormat = queryName.replace(' ', '%20')

    console.log('> Looking for patient... ', patientExists(patientSearched))
    if (patientExists(patientSearched)) {
        // console.log('> Patient not found')
        return res.send({
            error: false,
            patientExists: false,
            route: `/patient/search?name=${queryNameInHTTPFormat}`,
            HTTPVerb: 'GET',
            message: 'Patient not found'
        })
    } else {
        // console.log('> Patient was found')
        return res.send(patientSearched)
    }
    /** 
    await Patients.findAll({
        where: {
            nomeCompleto: queryName
        },
        attributes: ['idPatient', 'nomeCompleto', 'dataNascimento', 'urgencia']
    }).then(patients => {
        // Patient Validation
        if (patients != null) { // If patient EXISTS
            console.log('>Patient', patients);

            return res.json({
                error: false,
                route: `/patient/search?name=${patients.nomeCompleto}`,
                HTTPVerb: 'GET',
                message: 'Patient search by name is Alright'
            })
        } else {
            //console.error(error)
            res.json({
                patients,
                message: `Person not found. '${queryName}' not found in Database`
            })
        }
    }).catch(err => console.log(err))*/
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
                route: '/patient/all',
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
        route: '/patient/',
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