import pick from 'lodash/pick';
import { Schema, Model } from 'mongoose';
import {
    Inscription,
    InscriptionDbObject,
} from '../../types/generated/graphql';
import { CustomDocument } from './document';

export const COLLECTION_NAME = 'inscription';

export type InscriptionDoc = CustomDocument<InscriptionDbObject, Inscription>;

export type InscriptionModel = Model<InscriptionDoc>;

export const inscriptionSchema = new Schema({
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

inscriptionSchema.methods.format = function (): Inscription {
    return pick(this, ['id', 'name', 'phone', 'email', 'numberOfPeople']);
};
