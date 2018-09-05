import styled from 'styled-components';

import Input from '@material-ui/core/Paper';

const InputStyled = styled(Input)`
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
`;
// padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,

export default InputStyled;
