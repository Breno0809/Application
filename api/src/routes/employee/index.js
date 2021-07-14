const express = require('express'),
    router = express.Router()

router.use(express.json())

// Importing a template
const Employee = require('../../models/Employee')

/** Employee page GET Method */
router.get('/', (req, res) => { // IT'S WORKING
    res.status(200).send({
        error: false,
        route: '/employee/',
        HTTPVerb: 'GET',
        message: 'Employee Area is Alright'
    })
})

/** This purpose of this method is to display all records in the Employee table */
router.get('/all', (req, res) => { // IT'S WORKING
    Employee.findAll({ // findAll() function that searches for all records
        order: [
            ['idEmployee', 'ASC'] // ASC = Ascending order
        ]
    }).then(employee => {
        if (employee == null) {
            return res.json({
                error: false,
                route: '/employee/all',
                HTTPVerb: 'GET',
                message: 'EMPLOYEE MODEL IS EMPTY'
            })
        } else {
            return res.json({ employee })
        }
    })
})

// Error Handling
router.use((req, res, next) => { // IT'S WORKING
    res.status(404).send({
        error: true,
        typeError: 404,
        HTTPVerb: null,
        message: 'Page not Found'
    })
    const err = new Error('Page Not Found!')
    err.status = 404
    next(err)
})

module.exports = router