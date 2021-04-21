import React, { useState, useEffect } from "react";
import "../../assets/css/holder.css";
import BusinessUnit from "../module/Purchase/Business-Unit/BusinessUnit";

import PurchaseOrder from "../module/Purchase/Purchase-Order/PurchaseOrder";
import Supplier from "../module/Purchase/Supplier/Supplier";
import Customer from "../module/Purchase/Customer/Customer";

function Holder() {
  return (
    <div className='holder h-100 p-5'>
      {/* <PurchaseOrder /> */}
      {/* <BusinessUnit /> */}
      {/* <Supplier /> */}
      <Customer />
    </div>
  );
}

export default Holder;
