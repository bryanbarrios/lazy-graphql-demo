import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';
import '@styles/main.css';

const client = new ApolloClient({ uri: 'https://rickandmortyapi.com/graphql', cache: new InMemoryCache() });

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
