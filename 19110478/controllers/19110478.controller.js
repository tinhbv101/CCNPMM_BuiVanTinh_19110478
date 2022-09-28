const { mygroup, finalgroup } = require('../models/mygroup.model');

const controller_19110478 = {
    get (req, res) {
        const student = mygroup.filter(value => value.id === req.params.id)
            if (mygroup.filter(e => e.id === req.params.id).length === 0) {
                res.status(404).json('Not valid')
            } else {
                res.status(200).json(student[0])
            }
    },

    post (req, res) {
        const newMenber = req.body
        if (mygroup.filter(e => e.id === newMenber.id).length > 0) {
            res.status(404).json('Not valid')
        } else {
            if (finalgroup.filter(e => e.id === newMenber.id).length > 0) {
                mygroup.push(newMenber);
                res.status(200).json(mygroup)
            } else {
                res.status(404).json('Not valid') 
            }
        }
    }
};

module.exports = controller_19110478