import React, { PureComponent } from 'react';
import autoBind from 'react-autobind';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DIRECTION } from '../constants';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled.button`
  margin: 10px;
`;

const Title = styled.h3`
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 12px;
`;

export default class Controls extends PureComponent {
  static propTypes = {
    onMovePony: PropTypes.func.isRequired,
  }

  constructor(...args) {
    super(...args);

    autoBind(this);
  }

  componentWillMount() {
    window.addEventListener('keydown', this.keyboadEventHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyboadEventHandler);
  }

  keyboadEventHandler(event) {
    const { onMovePony } = this.props;
    const { key } = event;

    if (['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'].includes(key)) {
      event.preventDefault();
    }

    if (key === 'w' || key === 'ArrowUp') {
      onMovePony(DIRECTION.NORTH);
    }

    if (key === 'a' || key === 'ArrowLeft') {
      onMovePony(DIRECTION.WEST);
    }

    if (key === 's' || key === 'ArrowDown') {
      onMovePony(DIRECTION.SOUTH);
    }

    if (key === 'd' || key === 'ArrowRight') {
      onMovePony(DIRECTION.EAST);
    }
  }

  render() {
    const { onMovePony } = this.props;

    return (
      <Container>
        <Title>Move the pony</Title>
        <Subtitle>You may also use directional keys and &quot;wasd&quot; controls</Subtitle>
        <Row>
          <Button onClick={() => onMovePony(DIRECTION.NORTH)}>Up</Button>
        </Row>
        <Row>
          <Button onClick={() => onMovePony(DIRECTION.WEST)}>Left</Button>
          <Button onClick={() => onMovePony(DIRECTION.EAST)}>Right</Button>
        </Row>
        <Row>
          <Button onClick={() => onMovePony(DIRECTION.SOUTH)}>Down</Button>
        </Row>
      </Container>
    );
  }
}
