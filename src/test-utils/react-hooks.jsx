/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',
  cache: new InMemoryCache(),
});

const AllTheProviders = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

const customRenderHook = (callback, options) =>
  renderHook(callback, { wrapper: AllTheProviders, ...options });

const isQueryStatus = (queryResult) =>
  queryResult && queryResult.status === 'success';

const waitQueryIsStatus = (
  status,
  renderHookResult,
  { timeout = 5000 } = {}
) => {
  return renderHookResult.waitFor(
    () => isQueryStatus(renderHookResult.result.current, status),
    { timeout }
  );
};

const waitQueryIsLoading = (...params) => {
  return waitQueryIsStatus('loading', ...params);
};

const waitQueryIsSuccessful = (...params) => {
  return waitQueryIsStatus('success', ...params);
};

export * from '@testing-library/react-hooks';
export { customRenderHook as renderHook };
export { waitQueryIsLoading, waitQueryIsSuccessful };
