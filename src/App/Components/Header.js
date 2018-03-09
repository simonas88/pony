import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #222;
  height: auto;
  padding: 20px;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

export default function () {
  return (
    <Header className="App-header">
      <Title>Save the Pony!</Title>
    </Header>
  );
}
