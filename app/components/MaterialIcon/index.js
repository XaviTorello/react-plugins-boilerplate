/**
 * A material-ui icon rendered dynamically
 */

import React from 'react';
// import styled from 'styled-components';
import * as Icons from '@material-ui/icons';

export default (MaterialIcon = icon => Icons[icon]);
