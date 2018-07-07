const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chopSchema = new Schema({
    title: String,
    C1: String, 
    C2: String, 
    C3: String, 
    C4: String, 
    C5: String, 
    C6: String, 
    C7: String, 
    C8: String, 
    C9: String, 
    C10: String, 
    C11: String, 
    C12: String, 
    C13: String, 
    C14: String, 
    C15: String, 
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

//create mongodb collection with name chops and schema chopSchema
mongoose.model('Chop', chopSchema);
