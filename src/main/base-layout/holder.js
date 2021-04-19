import React, { useState, useEffect } from "react";
import "../../assets/css/holder.css";
import BusinessUnit from "../module/Purchase/Business-Unit/BusinessUnit";

import PurchaseOrder from "../module/Purchase/Purchase-Order/PurchaseOrder";
import Supplier from "../module/Purchase/Supplier/Supplier";
import Customer from "../module/Purchase/Customer/Customer";
import ItemProfile from './../module/Item/Item-Profile/ItemProfile';
import ItemCategory from './../module/Item/Item-Category/ItemCategory';
import ItemSubCategory from './../module/Item/Item-Sub-Category/ItemSubCategory';

function Holder() {
  return (
    <div className='holder h-100 p-5'>
      {/* <PurchaseOrder /> */}
      {/* <BusinessUnit /> */}
      {/* <Supplier /> */}
      {/* <Customer /> */}
      {/* <ItemProfile /> */}
      {/* <ItemCategory /> */}
      <ItemSubCategory />
    </div>
  );
}

export default Holder;
