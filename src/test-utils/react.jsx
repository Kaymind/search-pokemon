/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { render } from '@testing-library/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',
  cache: new InMemoryCache(),
});

const AllTheProviders = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
