import React from "react";
import ItemCategory from "../module/Configaration/item-management/Item-Category/ItemCategory";
import ItemProfile from "../module/Configaration/item-management/Item-Profile/ItemProfile";
import ItemSubCategory from "../module/Configaration/item-management/Item-Sub-Category/ItemSubCategory";
import UOM from "../module/Configaration/item-management/UOM/UnitOfMeasurement";
import BusinessUnit from "../module/Configaration/basic-configuration/Business-Unit/BusinessUnit";
import Customer from "../module/Sales-Management/Configuration/Customer/Customer";
import Supplier from "../module/Procurement-Management/Configuration/Supplier/Supplier";
import User from "../module/Configaration/basic-configuration/User/User";
import {
  Switch,
  Route,
} from "react-router-dom";

function Holder() {
  return (
    <>
      <Switch>
        <Route path='/configuration-management/basic/business-unit'>
          <BusinessUnit />
        </Route>
        <Route path="/configuration-management/basic/user">
          <User />
        </Route>
        <Route path="/configuration-management/item-management/item-category">
          <ItemCategory />
        </Route>
        <Route path='/configuration-management/item-management/item-subcategory'>
          <ItemSubCategory />
        </Route>
        <Route path='/configuration-management/item-management/item-profile'>
          <ItemProfile />
        </Route>
        <Route path='/procurement-management/configuration/supplier'>
          <Supplier />
        </Route>
        <Route path='/sales-management/configuration/customer'>
          <Customer />
        </Route>
        <Route path="/configuration-management/item-management/uom">
          <UOM />
        </Route>
        {/* <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </>
  );
}

export default Holder;
