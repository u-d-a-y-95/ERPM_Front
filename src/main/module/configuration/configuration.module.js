import React from "react";
import { Switch, Route } from "react-router-dom";
import Category from "./category";

function ConfigurationModule() {
  return (
    <Switch>
      <Route exact path="/configuration" />
      <Route path="/configuration/category" component={Category} />
    </Switch>
  );
}

export default ConfigurationModule;
