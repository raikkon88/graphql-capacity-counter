import { IResolvers } from '@graphql-tools/utils';

const resolverMap: IResolvers = {
    Query: {
        inscription(inscriptionId: string): string {
            console.log(inscriptionId);
            return 'hodel';
        },
    },
};

export default resolverMap;
