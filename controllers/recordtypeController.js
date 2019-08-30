const express = require('express');
const { RecordType } = require('../models/db');
const router = express.Router();
router.use((req, res, next) => {
    // authorize here
    next();
});

// fill customer apis here
router.get('/', (req, res) => {
    RecordType.findAll().then(types => {
        res.json(types)
    });
});

router.get('/:id', (req, res) => {
    RecordType.findByPk(req.params.id).then(type => {
        res.json(type)
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    RecordType.create(req.body).then(type => {
        res.json(type);
    }).catch(err => {
        return res.status(400).send(err.errors);
    });;
});

router.put('/:id', (req, res) => {
    RecordType.findByPk(req.params.id).then(type => {
        if (type != null) {
            type.update({
                RecType_name: req.body.RecType_name,
                RecType_describe: req.body.RecType_describe
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
    RecordType.destroy({
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
