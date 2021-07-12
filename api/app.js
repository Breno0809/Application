const cors = require('cors'),
    express = require('express'),
    app = express()

// Connection with Database     
// const db = require('./src/models/db')

app.use(cors()) // Using CORS Policy
app.use(express.json())

// Importing External Routes
// const loginRoute = require('./src/routes/login/index')
const employeeRoute = require('./src/routes/employee/index'),
    patientRoute = require('./src/routes/patient/index'),
    oxygenRoute = require('./src/routes/oxygen/index'),
    historicRoute = require('./src/routes/historic/index')

app.get('/', async(req, res) => {
    res.status(200).send({ message: `Welcome to Homepage` })
})

app.post('/', async(req, res) => {
    res.send('OK')
})


// app.use('/login', loginRoute)        // LOGIN ROUTE
app.use('/employee', employeeRoute) // EMPLOYEE ROUTE
app.use('/patient', patientRoute) // PATIENT ROUTE
app.use('/oxygen', oxygenRoute) // OXYGEN ROUTE   
app.use('/historic', historicRoute) // HISTORIC ROUTE

// Error Handling
app.use((req, res, next) => {
    const err = new Error('Page Not Found!')
    err.status = 404
    next(err)
})

module.exports = app