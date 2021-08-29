import { ObjectId } from 'mongodb';
import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Inscription } from '../../types/generated/graphql';
import InscriptionDoc from '../models/inscription';

export default class Inscriptions extends MongoDataSource<InscriptionDoc> {
    async getInscriptionById(id: string): Promise<Inscription> {
        console.log(this);
        const insc = await this.findOneById(id);
        if (!insc) throw new Error(`inscription with id ${id} does not exist`);
        return insc;
    }

    async createInscription(inscription: Inscription): Promise<Inscription> {
        const inscriptionDoc: InscriptionDoc = new InscriptionDoc(inscription);
        await inscriptionDoc.save();
        console.log(inscriptionDoc);
        return inscriptionDoc;
    }
}
