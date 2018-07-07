//contains model class for mongoose

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    title: String,
    S1: String,
    S2: String,
    S3: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

//create mongodb collection with name skills and schema skillSchema
mongoose.model('Survey', surveySchema);