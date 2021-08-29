import mongoose from 'mongoose';

export const COLLECTION_NAME = 'inscription';

export const inscriptionSchema = new mongoose.Schema({
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

const inscription = mongoose.model(COLLECTION_NAME, inscriptionSchema);

export default inscription;
