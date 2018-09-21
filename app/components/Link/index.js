import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

function StyledComponentsLink(props) {
  if (props.to && !props.disabled) {
    return <LinkStyled to={props.to} {...props} />;
  }
  return <div {...props} />;
}

StyledComponentsLink.propTypes = {
  to: PropTypes.string,
  disabled: PropTypes.bool,
};

export default StyledComponentsLink;
