import * as dotenv from 'dotenv';
import './database/database';
import { ApolloServer } from 'apollo-server';
import schema from './graphql/schema/schema';
import { COLLECTION_NAME as INSCRIPTION_COLLECTION } from './database/models/inscription';
import Inscriptions from './database/datasources/inscriptionDS';
import { getConnection } from './database/database';
import {
    ApolloServerPluginLandingPageProductionDefault,
    ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import { MongoClient } from 'mongodb';

dotenv.config();

const client = new MongoClient(process.env.DATABASE_URL || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.connect();

const server = new ApolloServer({
    schema,
    dataSources: () => {
        return {
            inscriptionAPI: new Inscriptions(
                client.db().collection(INSCRIPTION_COLLECTION),
            ),
        };
    },
    cors: true,
    introspection: true,
    plugins: [
        process.env.NODE_ENV === 'production'
            ? ApolloServerPluginLandingPageProductionDefault({ footer: false })
            : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
