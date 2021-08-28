import 'graphql-import-node';
import typeDefs from './schema.graphql';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import inscriptionResolver from '../resolvers/inscription';
import { IResolvers } from '@graphql-tools/utils';

const resolvers: IResolvers[] = [inscriptionResolver];

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;
