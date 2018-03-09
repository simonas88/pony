import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Controls from './Controls';
import Cell from './Cell';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Maze = styled.div`
  display: flex;
  flex-direction: column;
`;

const CellRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MazeID = styled.p`
  color: gray;
  font-size: 12px;
  margin: 15px;
`;

export default function Game(props) {
  const {
    mazeId, mazeData, pony, domokun, goal, onMovePony,
  } = props;

  if (!mazeId) {
    return null;
  }

  return (
    <Container>
      <Controls onMovePony={onMovePony} />
      <Maze>
        {mazeData.map(row => (
          <CellRow key={`maze-row-${row[0].originalIndex}`}>
            {row.map(cell => (
              <Cell
                {...cell}
                hasPony={pony === cell.originalIndex}
                hasDomokun={domokun === cell.originalIndex}
                hasGoal={goal === cell.originalIndex}
                key={`maze-cell${cell.originalIndex}`}
              />
            ))}
          </CellRow>
        ))}
      </Maze>
      <MazeID>Maze ID: {mazeId}</MazeID>
    </Container>
  );
}

Game.propTypes = {
  mazeId: PropTypes.string.isRequired,
  mazeData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())).isRequired,
  pony: PropTypes.number.isRequired,
  domokun: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  onMovePony: PropTypes.func.isRequired,
};
