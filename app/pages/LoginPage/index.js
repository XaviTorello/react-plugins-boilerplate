/*
 * LoginPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import withStyles from '@material-ui/core/styles/withStyles';

import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import H2 from 'components/H2';
import CenteredSection from './CenteredSection';
import Button from './Button';
import FormControl from './FormControl';
import Input from './Input';
import InputLabel from './InputLabel';
import Paper from './Paper';

import messages from './messages';

import { login } from './actions';
import {
  makeSelectUsername,
  makeSelectToken,
  makeSelectMessage,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.PureComponent {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleFormSubmit = evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    const { username, password } = this.state;
    this.props.onSubmitForm(username, password);
  };

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      const { username, password } = this.props;
      this.props.onSubmitForm(username, password);
    }
  }

  render() {
    const { loading, error, classes, message } = this.props;

    return (
      <article>
        <Helmet>
          <title>Login Page</title>
          <meta name="description" content="Login text" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.welcomeTitle} />
            </H2>

            <main className={classes.layout}>
              <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockIcon />
                </Avatar>
                <Typography variant="headline">Login</Typography>
                <form className={classes.form} onSubmit={this.handleFormSubmit}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">
                      <FormattedMessage {...messages.formEmailTitle} />
                    </InputLabel>
                    <Input
                      id="email"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      onChange={this.handleChange('username')}
                    />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">
                      <FormattedMessage {...messages.formPasswordTitle} />
                    </InputLabel>
                    <Input
                      name="password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={this.handleChange('password')}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    fullWidth
                    variant="raised"
                    color="primary"
                    className={classes.submit}
                  >
                    <FormattedMessage {...messages.formLoginAction} />
                  </Button>
                </form>
              </Paper>
            </main>
          </CenteredSection>
          <b>Message</b>: {message}
        </div>
      </article>
    );
  }
}

LoginPage.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  password: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  token: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  // onChangeUsername: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (username, password) => {
      dispatch(login.request(username, password));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  token: makeSelectToken(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  message: makeSelectMessage(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(withStyles(styles)(LoginPage));
