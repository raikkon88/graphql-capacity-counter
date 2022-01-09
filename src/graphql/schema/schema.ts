import 'graphql-import-node';
import typeDefs from './schema.graphql';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import inscriptionResolver from '../resolvers/inscription';
import { IResolvers } from '@graphql-tools/utils';
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';

const resolvers: IResolvers[] = [inscriptionResolver];

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [DIRECTIVES],
    resolvers,
});

export default schema;
