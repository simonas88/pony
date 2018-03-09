import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { PONY } from '../../constants';

const Button = styled.button`
  margin: 1.5em;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: horizontal;
`;

const FieldSet = styled.fieldset`
  margin: 12px 0 0 0;
`;

const FieldLabel = styled.label`
  font-size: 12px;
  margin: 0 10px 0 10px;
`;

const DIMENSION = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const DIFICULTY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default class NewGameMenu extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }

  constructor(...args) {
    super(...args);

    autoBind(this);

    this.state = {
      pony: 'default',
      height: 'default',
      width: 'default',
      difficulty: 'default',
    };
  }

  isFormReady() {
    const formKeys = Object.keys(this.state);

    return formKeys.some(key => this.state[key] === 'default');
  }

  updateForm(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    };
  }

  render() {
    const ponyKeys = Object.keys(PONY);

    return (
      <Fragment>
        <h2>New game</h2>
        <form>
          <FieldSet>
            <legend>Pony</legend>

            <select value={this.state.pony} onChange={this.updateForm('pony')}>
              <option disabled value="default"> -- select your pony -- </option>
              {ponyKeys.map(key => (
                <option value={PONY[key]} key={`pony-key-${PONY[key]}`}>{PONY[key]}</option>
              ))}
            </select>
          </FieldSet>

          <FieldSet>
            <legend>Maze dimensions</legend>

            <FieldLabel>Width:</FieldLabel>
            <select value={this.state.width} onChange={this.updateForm('width')}>
              <option disabled value="default">--</option>
              {DIMENSION.map(dim => <option value={dim} key={`width-key-${dim}`}>{dim}</option>)}
            </select>

            <FieldLabel>Height:</FieldLabel>
            <select value={this.state.height} onChange={this.updateForm('height')}>
              <option disabled value="default">--</option>
              {DIMENSION.map(dim => <option value={dim} key={`height-key-${dim}`}>{dim}</option>)}
            </select>
          </FieldSet>

          <FieldSet>
            <legend>Difficulty</legend>
            <select value={this.state.difficulty} onChange={this.updateForm('difficulty')}>
              <option disabled value="default">--</option>
              {DIFICULTY.map(dim => (
                <option value={dim} key={`difficulty-key-${dim}`}>{dim}</option>
              ))}
            </select>
          </FieldSet>
        </form>

        <Controls>
          <Button onClick={this.props.onCancel}>Cancel</Button>
          <Button
            disabled={this.isFormReady()}
            onClick={() => this.props.onSubmit(this.state)}
          >
            To the maze!
          </Button>
        </Controls>
      </Fragment>
    );
  }
}
