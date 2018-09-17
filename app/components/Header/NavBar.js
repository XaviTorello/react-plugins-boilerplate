import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Drawer from 'components/Drawer';

const ContainerCentered = styled.div`
  text-align: center;
`;

function CompleteDrawer(props) {
  return (
    <div className={props.className}>
      <Drawer menu={props.menu}>
        <ContainerCentered>{props.children}</ContainerCentered>
      </Drawer>
    </div>
  );
}

CompleteDrawer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
  menu: PropTypes.array.isRequired,
};

export default CompleteDrawer;
