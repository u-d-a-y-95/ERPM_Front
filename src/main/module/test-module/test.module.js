import React from 'react'
import {Switch,Route} from 'react-router-dom'

function TestModule (){
    return (
        <div className="holder">
             <Switch>
              <Route exact path="/configuration" render = {()=><>hello</>} />
            </Switch>
        </div>
    )
}

export default TestModule