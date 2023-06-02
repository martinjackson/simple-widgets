import { ApolloClient, InMemoryCache } from '@apollo/client';

const clientConfig = {
    uri: '/graphql',
    connectToDevTools: false,
    cache: new InMemoryCache({ addTypename: false })
}

export const client = new ApolloClient(clientConfig);
