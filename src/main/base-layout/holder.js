import React from 'react'
import {Switch,Route} from 'react-router-dom'
import ConfigurationModule from '../module/configuration/configuration.module'

function Holder (){
    return (
        <div className="holder">
             <Switch>
              <Route  path="/configuration" component={ConfigurationModule} />
            </Switch>
        </div>
    )
}

export default Holder