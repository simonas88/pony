import axios from 'axios';
import { GAME_STATE, HOST_URL } from './constants';

export const FETCH_MAZE_SUCCESS = 'FETCH_MAZE_SUCCESS';
export const FETCH_MAZE_ERROR = 'FETCH_MAZE_ERROR';
export const GAME_OVER = 'GAME_OVER';
export const RESET_GAME = 'RESET';


export function fetchMaze(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${HOST_URL}/pony-challenge/maze/${id}`);

      dispatch({
        type: FETCH_MAZE_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: FETCH_MAZE_ERROR,
      });
    }
  };
}

export function createGame(payload) {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${HOST_URL}/pony-challenge/maze`, payload);

      dispatch(fetchMaze(response.data.maze_id));
    } catch (err) {
      //
    }
  };
}

export function movePony(direction) {
  return async (dispatch, getState) => {
    const { mazeId } = getState();

    try {
      const result = await axios.post(`${HOST_URL}/pony-challenge/maze/${mazeId}`, { direction });

      if (result.data.state !== GAME_STATE.ACTIVE) {
        dispatch({
          type: GAME_OVER,
          payload: result.data,
        });

        return;
      }

      dispatch(fetchMaze(mazeId));
    } catch (err) {
      //
    }
  };
}

export function resetGame() {
  return dispatch => dispatch({ type: RESET_GAME });
}
