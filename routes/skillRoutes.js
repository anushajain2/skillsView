const mongoose = require('mongoose');

const Skill = mongoose.model('skills');
const Chop = mongoose.model('Chop');

module.exports = (app) => {
    app.get('/api/skills_for_user', async (req, res) => {
        //get the skills for this user
        const skill = await Skill.find({"title": "JAVASCRIPT"});
        res.send(skill);
        
    });

    app.get('/api/chops_for_user', async (req, res) => {
        //get the chops for this user and this skill
        console.log(req.skill);
        const chop = await Chop.find({"C1": "Knows how closures work"});
        res.send(chop);
    });



};