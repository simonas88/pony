import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import Menu from './Menu';
import Game from './Game';
import { Modal } from '../Components';
import { resetGame, movePony, createGame, fetchMaze } from '../actions';
import { GAME_STATE, HOST_URL } from '../constants';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 500px;
  max-height: 500px;
  margin: 20px;
`;

const GameOverContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  margin: 1.5em 0 0 0;
`;

class GameContainer extends Component {
  static propTypes = {
    gameState: PropTypes.shape({
      gameState: PropTypes.string,
      mazeId: PropTypes.string,
      resultMessage: PropTypes.string,
      resultPicture: PropTypes.string,
      fetchError: PropTypes.bool,
    }).isRequired,
  };

  constructor(...args) {
    super(...args);

    autoBind(this);
  }

  createNewGame(payload) {
    this.props.dispatch(createGame(payload));
  }

  continueGame(id) {
    this.props.dispatch(fetchMaze(id));
  }

  handleGameOver() {
    this.props.dispatch(resetGame());
  }

  movePony(direction) {
    this.props.dispatch(movePony(direction));
  }

  render() {
    const {
      gameState, mazeId, resultMessage, resultPicture, fetchError,
    } = this.props.gameState;

    return (
      <Container>
        {mazeId
          ? <Game {...this.props.gameState} onMovePony={this.movePony} />
          : (
            <Menu
              onCreateNewGame={this.createNewGame}
              onContinueGame={this.continueGame}
              fetchError={fetchError}
            />
          )
        }
        {!!gameState && gameState.toUpperCase() !== GAME_STATE.ACTIVE.toUpperCase() && (
          <Modal>
            <GameOverContainer>
              <h2>{resultMessage}</h2>
              <Image src={`${HOST_URL}${resultPicture}`} alt={resultMessage} />
              <Button onClick={this.handleGameOver}>Return to main menu</Button>
            </GameOverContainer>
          </Modal>
        )}
      </Container>
    );
  }
}

export default connect(gameState => ({ gameState }))(GameContainer);
