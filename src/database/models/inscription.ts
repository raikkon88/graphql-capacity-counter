import mongoose from 'mongoose';

const inscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    numberOfPeople: {
        type: Number,
        required: true,
    },
});

const inscription = mongoose.model('inscription', inscriptionSchema);

export default inscription;
