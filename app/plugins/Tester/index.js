import React from 'react';
import { Switch, Route } from 'react-router';

const divTest = (
  <div>
    <h1>This is a test!!!!</h1>
  </div>
);

class Tester1 extends React.Component {
  render = () => {
    console.log('1TESTER');
    return (
      <div>
        <h1>This is a 111!!!!</h1>
      </div>
    );
  };
}

class Tester2 extends React.Component {
  render = () => {
    console.log('2TESTER');
    return (
      <div>
        <h2>This is a test2222!!!!</h2>
      </div>
    );
  };
}

export default class Tester extends React.Component {
  render() {
    console.log('TESTER');
    return (
      <Switch>
        <Route exact path="/component/1" component={Tester1} />
        <Route exact path="/rolf/2" component={Tester2} />
      </Switch>
    );
  }
}
