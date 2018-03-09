import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as assets from './assets';

const StyledCell = styled.div`
  width: 1.5em;
  height: 1.5em;
  background-color: ${
  ({ hasGoal }) => {
    if (hasGoal) { return 'blue'; }
    return 'green';
  }
};
  border-color: transparent;
  border-top-color: ${props => (props.north ? 'black' : 'transparent')};
  border-left-color: ${props => (props.west ? 'black' : 'transparent')};
  border-width: 0.18em;
  border-style: solid;
`;

const Icon = styled.img`
  max-height: 1.5em;
  max-width: 1.5em;
`;

export default class Cell extends PureComponent {
  static propTypes = {
    north: PropTypes.bool.isRequired,
    west: PropTypes.bool.isRequired,
    hasPony: PropTypes.bool.isRequired,
    hasDomokun: PropTypes.bool.isRequired,
    hasGoal: PropTypes.bool.isRequired,
  }

  render() {
    const { hasPony, hasDomokun, ...rest } = this.props;

    return (
      <StyledCell {...rest}>
        {hasPony && <Icon src={assets.pony} />}
        {hasDomokun && <Icon src={assets.domokun} />}
      </StyledCell>
    );
  }
}
