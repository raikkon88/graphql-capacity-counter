import { IResolvers } from '@graphql-tools/utils';
import { Inscription } from '../../types/generated/graphql';

const inscription: Inscription = {
    name: 'ins',
    email: 'email',
    numberOfPeople: 10,
    phone: 'tel',
};

const resolverMap: IResolvers = {
    Query: {
        inscription(): Inscription {
            return inscription;
        },
    },
};

export default resolverMap;
