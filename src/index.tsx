import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'
import { theme as themeConfig } from './theme'
import { theme } from 'styled-tools'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',
  cache: new InMemoryCache()
});

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, *:active, *:focus {
    font-family: 'Kanit', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    outline: none !important;
    box-sizing: border-box;
  }
 
  body {
    color: ${theme('colors.textPrimary')};
  }
`

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={themeConfig}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
