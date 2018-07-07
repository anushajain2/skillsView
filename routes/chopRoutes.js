const mongoose = require('mongoose');

const Chop = mongoose.model('Chop');
const User = mongoose.model('User');

module.exports = (app) => {
    app.post('/api/chops', async (req, res) => {
       //to be written
    });

    app.get('/api/chops_for_user', async (req, res) => {
        display = await User.findById(req.user.id)
                         .populate('chops');
        console.log(display);
    });
};