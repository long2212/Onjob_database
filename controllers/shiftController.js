const express = require('express');
const { Shift } = require('./../models/db');
const router = express.Router();
router.use((req, res, next) => {
    // authorize here
    next();
});

// fill customer apis here
router.get('/', (req, res) => {
    Shift.findAll().then(types => {
        res.json(types)
    });
});

router.get('/:id', (req, res) => {
    Shift.findByPk(req.params.id).then(type => {
        res.json(type)
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    Shift.create(req.body).then(type => {
        res.json(type);
    }).catch(err => {
        return res.status(400).send(err.errors);
    });;
});

router.put('/:id', (req, res) => {
    Shift.findByPk(req.params.id).then(type => {
        if (type != null) {
            type.update({
                Shift_Type: req.body.Shift_Type,
                Shift_Duration: req.body.Shift_Duration
            }).then(type => {
                res.json(type);
            }).catch(err => {
                return res.status(400).send(err.errors);
            });
        } else {
            return res.status(400).send('Not Found');
        }
    });
});

router.delete('/:id', (req, res) => {
    Shift.destroy({
        where:
        {
            id: req.params.id
        }
    }).then(type => {
        res.json(type);
    }).catch(err => {
        return res.status(500).send(err.errors);
    });
});

// fill customer type apis here
module.exports = router;
