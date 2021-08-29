import { IResolvers } from '@graphql-tools/utils';
import { Inscription, InscriptionInput } from '../../types/generated/graphql';

const resolverMap: IResolvers = {
    Query: {
        async inscription(
            _,
            { id },
            { dataSources: { inscriptionAPI } },
        ): Promise<Inscription> {
            return await inscriptionAPI.getInscriptionById(id);
        },
    },
    Mutation: {
        async createInscription(
            _,
            content: InscriptionInput,
            { dataSources: { inscriptionAPI } },
        ): Promise<Inscription> {
            return await inscriptionAPI.createInscription(content);
        },
    },
};

export default resolverMap;
