/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from 'theme';

import Plugins from 'plugins';

import LoginPage from 'pages/LoginPage/Loadable';
import HomePage from 'pages/HomePage/Loadable';
import FeaturePage from 'pages/FeaturePage/Loadable';
import NotFoundPage from 'pages/NotFoundPage/Loadable';
import Skeleton from 'containers/Skeleton';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 0px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <MuiThemeProvider theme={theme}>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Skeleton>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/features" component={FeaturePage} />
            <Route exact path="/" component={HomePage} />
            <Route component={Plugins} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </Skeleton>
        <Footer />
      </MuiThemeProvider>
    </AppWrapper>
  );
}
