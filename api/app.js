const cors = require('cors')
const express = require('express')
const app = express()

// Connection with Database     
// const db = require('./src/models/db')

app.use(cors())
app.use(express.json())

// External Page Routes
const loginRoute = require('./src/routes/login/index')
const employeeRoute = require('./src/routes/employee/index')
const patientRoute = require('./src/routes/patient/index')
const oxygenRoute = require('./src/routes/oxygen/index')

// Importing a template
const Patients = require('./src/models/Patients')
const Employee = require('./src/models/Employee')

app.get('/', (req, res) => {
    res.status(200).send({ message: `Welcome to Homepage` })
})

app.post('/', async(req, res, next) => {
    const result = await Patients.create(
        req.body
    ).then(() => {
        res.status(201).send('Patient record created successful')
        console.log(result);
    }).catch(err => {
        res.status(400).send({
            Error: 'Error: Patient record created unsuccessful',
            TypeError: err
        })
        console.error(err);
    })
})

// LOGIN ROUTE
app.use('/login', loginRoute)
    // EMPLOYEE ROUTE
app.use('/employee', employeeRoute)
    // PATIENT ROUTE
app.use('/patient', patientRoute)
    // OXYGEN ROUTE
app.use('/oxygen', oxygenRoute)

// Error Handling
app.use((req, res, next) => {
    const err = new Error('Page Not Found!')
    err.status(404)
    next(err)
})

module.exports = app