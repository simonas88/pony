import React, { Component } from 'react';
import autoBind from 'react-autobind';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NewGameMenu from './NewGameMenu';
import ContinueGameMenu from './ContinueGameMenu';
import { Modal } from '../../Components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin: 1.5em 0 0 0;
`;

export default class MainMenu extends Component {
  static propTypes = {
    fetchError: PropTypes.bool,
    onCreateNewGame: PropTypes.func.isRequired,
    onContinueGame: PropTypes.func.isRequired,
  }

  static defaultProps = {
    fetchError: false,
  }

  constructor(...args) {
    super(...args);

    autoBind(this);

    this.state = {
      newGameMenuOpen: false,
      continueGameMenuOpen: false,
    };
  }

  componentWillUnmount() {
    this.closeMenu();
  }

  createNewGame(data) {
    const payload = {
      'maze-width': Number(data.width),
      'maze-height': Number(data.height),
      'maze-player-name': data.pony,
      difficulty: Number(data.difficulty),
    };

    this.props.onCreateNewGame(payload);
  }

  continueGame({ mazeId }) {
    this.props.onContinueGame(mazeId);
  }

  openNewGameMenu() {
    this.setState({ newGameMenuOpen: true, continueGameMenuOpen: false });
  }

  openContinueGameMenu() {
    this.setState({ newGameMenuOpen: false, continueGameMenuOpen: true });
  }

  closeMenu() {
    this.setState({ newGameMenuOpen: false, continueGameMenuOpen: false });
  }

  render() {
    return (
      <Container>
        <Button onClick={this.openNewGameMenu}>New game</Button>
        <Button onClick={this.openContinueGameMenu}>Continue game</Button>
        {/* <Button>Load game</Button> */}
        {this.state.newGameMenuOpen && (
          <Modal>
            <NewGameMenu
              onSubmit={this.createNewGame}
              onCancel={this.closeMenu}
            />
          </Modal>
        )}
        {this.state.continueGameMenuOpen && (
          <Modal>
            <ContinueGameMenu
              onSubmit={this.continueGame}
              onCancel={this.closeMenu}
              error={this.props.fetchError}
            />
          </Modal>
        )}
      </Container>
    );
  }
}
