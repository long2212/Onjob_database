const express = require('express');
const {Shift} = require('./../models/db')
const router = express.Router();
router.use((req,res,next) => {
    // authorize here
    next();
});

// fill degree apis here
router.get('/',(req,res) => {
    Shift.findAll().then(types => {
        res.json(types)
    });
});
// CHANGE HERE
router.get('/:id',(req,res)=>{
    Shift.findByPk(req.params.id).then(types => {
        if (type != null){
            res.json(type)
        } else {
            res.status(404).send('Not Found!');
        }
    });
});

router.post('/',(req,res) =>{
    // validate data here
    Shift.create(req.body).then(type =>{
        res.json(type);
    }).catch(err => {
        return res.status(400).send(err.errors);
    });
});

router.put('/:id',(req,res)=>{
    //validate data here
    Shift.findByPk(req.params.id).then(type=>{
        if (type!= null){
            type.update({
                Shift_Type:req.body.Shift_Type,
                Shift_Duration:req.body.Shift_Duration,
                Shift_describe:req.body.Shift_describe
            }).then(type => {
                res.json(type);
            }).catch(err => {
                return res.status(400).send(err.errors);
            });
        }else {
            res.status(404).send('Not Found!');
        }
    });
});

router.delete('/:id',(req,res)=>{
    Shift.destroy({
        where:{
            id:req.params.id
        }
    }).then(type => {
        res.json(type);
    }).catch(err =>{
        return res.status(500).send(err.errors);
    });
});

module.exports = router;