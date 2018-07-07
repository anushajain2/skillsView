//contains model class for mongoose

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleID: String,
    chops: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Chop'
    }],
    surveys: [{
        type: Schema.Types.ObjectId,
        ref: 'Survey'
    }]
});

//create mongodb collection with name users and schema userSchema
mongoose.model('User', userSchema);