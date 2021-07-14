const cors = require('cors'),
    express = require('express'),
    app = express()

// Connection with Database     
// const db = require('./src/models/db')

app.use(cors()) // Using CORS Policy
app.use(express.json())

// Importing External Routes
// const loginRoute = require('./src/routes/login/index')
const employeeRoute = require('./src/routes/employee/index'), // IT'S WORKING
    patientRoute = require('./src/routes/patient/index'), // IT'S WORKING
    oxygenRoute = require('./src/routes/oxygen/index'),
    historicRoute = require('./src/routes/historic/index'),
    signInPatient = require('./src/routes/singIn/patients/index'), // IT'S WORKING
    signInEmployee = require('./src/routes/singIn/employees/index') // IT'S WORKING

/** Main page GET Method */
app.get('/', async(req, res) => { // IT'S WORKING
    res.status(200).send({
        error: false,
        route: '/',
        HTTPVerb: 'GET',
        message: `Welcome to Homepage`
    })
})

/** The purpose of this method is to receive all data from the home page form */
app.post('/', async(req, res) => { // IT'S WORKING
    res.send({
        error: false,
        route: '/',
        HTTPVerb: 'POST',
        message: `Welcome to Homepage`
    })
})

// app.use('/login', loginRoute) // LOGIN ROUTE


app.use('/employee', employeeRoute) // EMPLOYEE ROUTE
app.use('/patient', patientRoute) // PATIENT ROUTE
app.use('/oxygen', oxygenRoute) // OXYGEN ROUTE   
app.use('/historic', historicRoute) // HISTORIC ROUTE
app.use('/patients', signInPatient) // PATIENT REGISTER ROUTE
app.use('/employees', signInEmployee) // EMPLOYEE REGISTER ROUTE

// Error Handling
app.use((req, res, next) => {
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

module.exports = app