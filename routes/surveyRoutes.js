const mongoose = require('mongoose');

const Survey = mongoose.model('Survey');
const User = mongoose.model('User');
const Chop = mongoose.model('Chop');


module.exports = (app) => {
    app.post('/api/surveys', async (req, res) => {
        console.log(req.body);
        const { title, S1, S2, S3 } = req.body;
        //ensure old one for this same skill is overwritten
        const survey = new Survey({
            title,
            S1,
            S2,
            S3,
            user: req.user.id
        });

        const chop = new Chop({
            title, 
            user: req.user.id
        });

        try {
            user = await User.findById(req.user.id);
            user.surveys.push(survey);
            user.chops.push(chop);
            await survey.save(); 
            await chop.save();
            await user.save();
            //now update the chops collection.
            //find the answers collection for this skill and compare to surveys collection
            //based on which property matched, and enable that value on chops collectio
            res.send(user);  
            
        } catch(err) {
            res.status(422).send(err);
        };
    });

    app.get('/api/surveys_for_user', async (req, res) => {
        display = await User.findById(req.user.id)
                         .populate('surveys');
        console.log(display);
    });


};
