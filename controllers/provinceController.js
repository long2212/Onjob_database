const express = require('express');
const { Province } = require('./../models/db');
const router = express.Router();
router.use((req, res, next) => {
    // authorize here
    next();
});

// fill customer apis here
router.get('/', (req, res) => {
    Province.findAll().then(types => {
        res.json(types)
    });
});

router.get('/:id', (req, res) => {
    Province.findByPk(req.params.id).then(type => {
        res.json(type)
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    Province.create(req.body).then(type => {
        res.json(type);
    }).catch(err => {
        return res.status(400).send(err.errors);
    });;
});

router.put('/:id', (req, res) => {
    Province.findByPk(req.params.id).then(type => {
        if (type != null) {
            type.update({
                Province_name: req.body.Province_name
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
    Province.destroy({
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
