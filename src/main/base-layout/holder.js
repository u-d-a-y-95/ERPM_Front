import React, { useState, useEffect } from "react";
import "../../assets/css/holder.css";
import BusinessUnit from "../module/Purchase/Business-Unit/BusinessUnit";

import PurchaseOrder from "../module/Purchase/Purchase-Order/PurchaseOrder";

function Holder() {
  return (
    <div className='holder h-100 p-5'>
      {/* <PurchaseOrder /> */}
      <BusinessUnit />
    </div>
  );
}

export default Holder;
