import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import reducer from './reducer';
import { Header } from './Components';
import Game from './Game';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const Container = styled.div`
  font-family: sans-serif;
`;

export default function () {
  return (
    <Provider store={store}>
      <Container className="App">
        <Header />
        <Game />
      </Container>
    </Provider>
  );
}
