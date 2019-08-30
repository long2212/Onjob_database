const express = require('express');
const { Certificate } = require('../models/db');
const router = express.Router();
router.use((req, res, next) => {
    // authorize here
    next();
});

// fill customer apis here
router.get('/', (req, res) => {
    Certificate.findAll().then(types => {
        res.json(types)
    });
});

router.get('/:id', (req, res) => {
    Certificate.findByPk(req.params.id).then(type => {
        res.json(type)
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    Certificate.create(req.body).then(type => {
        res.json(type);
    }).catch(err => {
        return res.status(400).send(err.errors);
    });;
});

router.put('/:id', (req, res) => {
    Certificate.findByPk(req.params.id).then(type => {
        if (type != null) {
            type.update({
                Cer_name: req.body.Cer_name,
                AcquireDate: req.body.AcquireDate,
                ExpiredDate: req.body.ExpiredDate,
                Duration: req.body.Duration,
                Cer_describe: req.body.Cer_describe
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
    Certificate.destroy({
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
