import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Background = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
  padding: 50;
  text-align: center;
`;

const Container = styled.div`
  background-color: #fff;
  border-radius: 5;
  min-width: 200px;
  margin: 0px auto;
  padding: 30px;
`;

export default class Modal extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <Background>
        <Container>{this.props.children}</Container>
      </Background>
    );
  }
}
