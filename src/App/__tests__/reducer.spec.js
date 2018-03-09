
import reducer from '../reducer';
import { FETCH_MAZE_SUCCESS, GAME_OVER, RESET_GAME } from '../actions';
import * as fixtures from './fixtures';


describe('reducer tests', () => {
  describe('Case default', () => {
    it('should return initial state', () => {
      expect(reducer()).toEqual(fixtures.initialState);
    });
  });

  describe('Case FETCH_MAZE_SUCCESS', () => {
    it('should return state with new maze data', () => {
      const action = {
        type: FETCH_MAZE_SUCCESS,
        payload: fixtures.mazeDataApi0,
      };

      expect(reducer(fixtures.initialState, action)).toEqual(fixtures.mazeModel0);
    });

    it('should update the positions of pony and domokun', () => {
      const action = {
        type: FETCH_MAZE_SUCCESS,
        payload: fixtures.mazeDataApi1,
      };

      expect(reducer(fixtures.mazeModel0, action)).toEqual(fixtures.mazeModel1);
    });
  });

  describe('Case GAME_OVER', () => {
    it('should update the game state to "over"', () => {
      const action = {
        type: GAME_OVER,
        payload: fixtures.moveApiOver,
      };

      expect(reducer(fixtures.mazeModel1, action)).toEqual(fixtures.mazeModelOver);
    });
  });

  describe('Case RESET_GAME', () => {
    it('should reset the game state to initial', () => {
      const action = {
        type: RESET_GAME,
      };

      expect(reducer(fixtures.mazeModelOver, action)).toEqual(fixtures.initialState);
    });
  });
});
