import React from "react";
import ItemCategory from "../module/Item/Item-Category/ItemCategory";
import ItemProfile from "../module/Item/Item-Profile/ItemProfile";
import ItemSubCategory from "../module/Item/Item-Sub-Category/ItemSubCategory";
import BusinessUnit from "../module/Purchase/Business-Unit/BusinessUnit";
import Customer from "../module/Purchase/Customer/Customer";
import PurchaseRequest from "../module/Purchase/Purchase Request/PurchaseRequest";
import Supplier from "../module/Purchase/Supplier/Supplier";
import Warehouse from "../module/Purchase/Warehouse/Warehouse";
import WarehouseLocation from '../module/Inventory/Wirehouse-Location/WarehouseLocation';

function Holder() {
  return (
    <>
      {/* <PurchaseOrder /> */}
      {/* <BusinessUnit /> */}
      {/* <Supplier /> */}
      {/* <Customer /> */}
      {/* <ItemProfile /> */}
      {/* <ItemCategory /> */}
      {/* <ItemSubCategory /> */}
      {/* <PurchaseRequest /> */}
      <Warehouse />
      <WarehouseLocation />
    </>
  );
}

export default Holder;
