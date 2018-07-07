//contains model class for mongoose

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    title: String,
    detail: String
});

//create mongodb collection with name skills and schema skillSchema
mongoose.model('skills', skillSchema);