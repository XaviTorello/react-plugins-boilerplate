import styled from 'styled-components';

import FormControl from '@material-ui/core/FormControl';

const Form = styled(FormControl)`
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
`;

export default Form;
