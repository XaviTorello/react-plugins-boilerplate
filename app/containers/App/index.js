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

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Plugins from 'plugins';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

// The colors
import {orange, red} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: red,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

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
            <meta name="description" content="A React.js Boilerplate application" />
          </Helmet>
          <Header>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/features" component={FeaturePage} />
              <Route component={Plugins} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </Header>
          <Footer />
       </MuiThemeProvider>
    </AppWrapper>
  );
}
