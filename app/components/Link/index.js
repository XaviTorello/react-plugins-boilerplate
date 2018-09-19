import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

function StyledComponentsLink(props) {
  if (props.to) {
    return <LinkStyled to={props.to} {...props} />;
  }
  return <div {...props} />;
}

StyledComponentsLink.propTypes = {
  to: PropTypes.string,
};

export default StyledComponentsLink;
