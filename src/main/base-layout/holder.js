import React from "react";
import ItemCategory from "../module/Item/Item-Category/ItemCategory";
import ItemProfile from "../module/Item/Item-Profile/ItemProfile";
import ItemSubCategory from "../module/Item/Item-Sub-Category/ItemSubCategory";
import BusinessUnit from "../module/Purchase/Business-Unit/BusinessUnit";
import Customer from "../module/Purchase/Customer/Customer";
import Supplier from "../module/Purchase/Supplier/Supplier";
// import User from "../module/Configaration/basic-configuration/User";
import {
  Switch,
  Route,
} from "react-router-dom";

function Holder() {
  return (
    <>
      <Switch>
        <Route path="/configuration-management/basic/business-unit">
          <BusinessUnit />
        </Route>
        {/* <Route path="/configuration-management/basic/user">
          <User />
        </Route> */}
        <Route path="/configuration-management/item-management/item-category">
          <ItemCategory />
        </Route>
        <Route path="/configuration-management/item-management/item-subcategory">
          <ItemSubCategory />
        </Route>
        <Route path="/configuration-management/item-management/item-profile">
          <ItemProfile />
        </Route>
        {/* <Route path="/">
          <Home />
        </Route> */}
      </Switch>
      {/* <PurchaseOrder /> */}

      {/* <Supplier /> */}
      {/* <Customer /> */}
      {/* <ItemProfile /> */}
      {/* <ItemCategory /> */}

    </>
  );
}

export default Holder;
