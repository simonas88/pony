import update from 'immutability-helper';

import {
  FETCH_MAZE_SUCCESS, FETCH_MAZE_ERROR, GAME_OVER, RESET_GAME,
} from './actions';
import { DIRECTION } from './constants';

const initialState = {
  mazeId: null,
  mazeData: null,
  pony: null,
  domokun: null,
  goal: null,
  gameState: null,
  resultMessage: null,
  resultPicture: null,
  fetchError: false,
};

function updateGameState(state, payload) {
  const { data, size } = payload;
  const [width] = size;
  const spec = {
    pony: { $set: payload.pony[0] },
    domokun: { $set: payload.domokun[0] },
    goal: { $set: payload['end-point'][0] },
    gameState: { $set: payload['game-state'].state.toLowerCase() },
    fetchError: { $set: false },
  };

  if (state.mazeId !== payload.maze_id) {
    const grid = data.reduce((agg, cell, index) => {
      const row = Math.floor(index / width);
      if (!agg[row]) {
        // eslint-disable-next-line no-param-reassign
        agg[row] = [];
      }

      const cellObject = {
        [DIRECTION.WEST]: cell.includes(DIRECTION.WEST),
        [DIRECTION.NORTH]: cell.includes(DIRECTION.NORTH),
        originalIndex: index,
      };

      agg[row].push(cellObject);

      return agg;
    }, []);

    spec.mazeData = { $set: grid };
    spec.mazeId = { $set: payload.maze_id };
  }

  return update(state, spec);
}

function finishGame(state, payload) {
  const spec = {
    gameState: { $set: payload.state },
    resultMessage: { $set: payload['state-result'] },
    resultPicture: { $set: payload['hidden-url'] },
  };

  return update(state, spec);
}

export default function (state = initialState, { type, payload } = {}) {
  switch (type) {
    case FETCH_MAZE_SUCCESS:
      return updateGameState(state, payload);

    case FETCH_MAZE_ERROR:
      return update(state, { fetchError: { $set: true } });

    case GAME_OVER:
      return finishGame(state, payload);

    case RESET_GAME:
      return initialState;

    default:
      return state;
  }
}
