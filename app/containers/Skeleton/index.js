/*
 *
 * Header
 *
 * this component connects the redux state menu list to the
 * Header component preparing their formated ListItems
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createSelector } from 'reselect';
import Header from 'components/Header';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import MaterialIcon from 'components/MaterialIcon';
import Link from 'components/Link';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { makeSelectMenu } from './selectors';

import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';

export class HeaderMenu extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    // Load the menu on load page!
    this.props.loadMenu();
  }
  render() {
    const menuFormatted = this.props.menu.map(entry => {
      const EntryIcon =
        (entry.get('icon') && MaterialIcon(entry.get('icon'))) || null;

      return entry.get('divider') ? (
        <Divider key={Math.random()} />
      ) : (
        <Link
          to={entry.get('url')}
          disabled={entry.get('disabled') || false}
          key={Math.random()}
        >
          <ListItem
            button
            key={entry.get('url')}
            disabled={entry.get('disabled') || false}
            title={entry.get('title') || entry.get('text')}
          >
            <ListItemIcon>
              <EntryIcon />
            </ListItemIcon>
            <ListItemText primary={entry.get('text')} />
          </ListItem>
        </Link>
      );
    });

    return <Header menu={menuFormatted}>{this.props.children}</Header>;
  }
}

HeaderMenu.propTypes = {
  menu: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  loadMenu: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadMenu: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(actions.menu.request('a_username'));
    },
  };
}

const mapStateToProps = createSelector(makeSelectMenu(), menu => ({
  menu,
}));

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'menu', reducer });
const withSaga = injectSaga({ key: 'menu', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HeaderMenu);
