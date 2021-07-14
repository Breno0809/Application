const express = require('express'),
    router = express.Router()

router.use(express.json())

// Importing a template
const Historic = require('../../models/Historic')

router.get('/', async(req, res) => {
    res.status(200).send({ message: 'Historic Area is Alright' })
})

router.get('/', (req, res) => {
    Historic.findAll({ // findAll() function that searches for all records
        order: [ // Sort all records by idHistoric
            ['idHistoric', 'DESC']
        ]
    }).then(historic => {
        res.json({ historic })
    })
})

/** FILTER BY NAME */
router.get('/historic', (req, res) => {
    const name = req.query
        // return res.send({ message: `Hello ${name}` })

    Historic.findAll({ // findAll() function that searches for all records
        order: [ // Sort all records by name
            [name, 'DESC']
        ]
    }).then(historic => {
        res.json({ historic })
    })

})

/** FILTER BY DATE */
router.get('/historic', (req, res) => {
    const { day, month } = req.query
        // return res.send({ message: `Hello ${name}` })

    Historic.findAll({ // findAll() function that searches for all records
        order: [ // Sort all records by day and month
            [day, 'DESC']
        ]
    }).then(historic => {
        res.json({ historic })
    })

})

router.use((req, res, next) => {
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