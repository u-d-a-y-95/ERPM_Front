import React, { useState, useEffect } from "react";
import "../../assets/css/holder.css";
import BusinessUnit from "../module/Purchase/Business-Unit/BusinessUnit";

import ItemProfile from '../module/Item/Item-Profile/ItemProfile'
import ItemSubCategory from '../module/Item/Item-Sub-Category/ItemSubCategory';

import PurchaseOrder from '../module/Purchase/Purchase-Order/PurchaseOrder'
import ItemCategory from './../module/Item/Item-Category/ItemCategory';


function Holder() {
    return (
        <div className="holder h-100 p-5">
          {/* <PurchaseOrder /> */}
          <ItemProfile />
          {/* <BusinessUnit /> */}
          {/* <ItemCategory /> */}
          {/* <ItemSubCategory /> */}
        </div>
    )
}

export default Holder;
