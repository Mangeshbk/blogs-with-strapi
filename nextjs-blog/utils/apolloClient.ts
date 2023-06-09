// import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

export default new ApolloClient({
  // link: new HttpLink({ uri: `http://localhost:1337/api/blog-posts`, fetch }),
  // cache: new InMemoryCache(),
  // ...(process.env.BUILD_ENV === 'production' || process.env.BUILD_ENV === 'prod'
  //   ? {}
  //   : { defaultOptions }),
  // uri: 'http://localhost:1337/graphql',
  uri: 'http://localhost:1337/api/blog-posts',
  cache: new InMemoryCache(),
});
