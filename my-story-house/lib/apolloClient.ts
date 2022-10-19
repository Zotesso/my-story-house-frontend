import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
});

const authLink = setContext((_, { headers }) => {
  console.log('http://localhost:4000');
  return {
    headers: {
      ...headers,
    }
  };
});

const client = new ApolloClient({
  link: (authLink as any).concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
