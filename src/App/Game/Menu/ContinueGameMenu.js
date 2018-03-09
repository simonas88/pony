import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

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

const Error = styled.p`
  color: red;
  font-size: 16px;
  margin: 15px 0 0 0;
`;

export default class ContinueGameMenu extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    error: PropTypes.bool,
  }

  static defaultProps = {
    error: false,
  }

  constructor(...args) {
    super(...args);

    autoBind(this);

    this.state = {
      mazeId: '',
    };
  }

  isFormReady() {
    const formKeys = Object.keys(this.state);

    return formKeys.some(key => this.state[key] === '');
  }

  updateForm(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    };
  }

  render() {
    return (
      <Fragment>
        <h2>Continue game</h2>
        <form>
          <FieldSet>
            <legend>Maze ID</legend>

            <input type="text" onChange={this.updateForm('mazeId')} value={this.state.mazeId} />
          </FieldSet>
        </form>

        {this.props.error && (
          <Error>Maze ID is incorrect!</Error>
        )}

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
