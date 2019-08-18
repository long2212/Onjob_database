const express = require('express');
const { Nation } = require('./../models/db');
const router = express.Router();
router.use((req, res, next) => {
    // authorize here
    next();
});

// fill customer apis here
router.get('/', (req, res) => {
    Nation.findAll().then(types => {
        res.json(types)
    });
});

router.get('/:id', (req, res) => {
    Nation.findByPk(req.params.id).then(type => {
        res.json(type)
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    Nation.create(req.body).then(type => {
        res.json(type);
    }).catch(err => {
        return res.status(400).send(err.errors);
    });;
});

router.put('/:id', (req, res) => {
    Nation.findByPk(req.params.id).then(type => {
        if (type != null) {
            type.update({
                name: req.body.name,
                commision: req.body.commision
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
    Nation.destroy({
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
