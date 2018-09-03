import React from 'react'
import { Switch, Route} from 'react-router'

import Tester from './Tester'

const Testezr = (props) => {
    return (
        <div>
            <h1>This is a test!</h1>
        </div>
    )
}

const Tester2 = (props) => {
    return (
        <div>
            <h1>This is NOT a test!</h1>
        </div>
    )
}

const Plugins = () => (
    <Switch>
        <Route exact path="/component" component={Tester}/>
    </Switch>
)

export default Plugins
