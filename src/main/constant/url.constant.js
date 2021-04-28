export const menu = [
    {
        "id": 1,
        "parentId": 0,
        "level": 1,
        "icon": "/media/svg/icons/iBOS/Procurement.svg",
        "name": "Procurement ",
        "sl": 1,
        "to": "/mngProcurement",
        "isRoot": true,
        "url": "/mngProcurement",
        "children": [
            {
                "id": 2,
                "parentId": 1,
                "level": 2,
                "icon": "simple-icon-briefcase",
                "name": "Purchase",
                "sl": 2,
                "to": "/mngProcurement/purchase-management",
                "isRoot": false,
                "url": "/mngProcurement/purchase-management",
                "children": [
                    {
                        "id": 3,
                        "parentId": 2,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Purchase Request",
                        "sl": 3,
                        "to": "/mngProcurement/purchase-management/purchase-request",
                        "isRoot": false,
                        "url": "/mngProcurement/purchase-management/purchase-request"
                    },
                    {
                        "id": 7,
                        "parentId": 2,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Supplier Item Assignment",
                        "sl": 6,
                        "to": "/mngProcurement/purchase-management/supplier-item-assignment",
                        "isRoot": false,
                        "url": "/mngProcurement/purchase-management/supplier-item-assignment"
                    },
                    {
                        "id": 8,
                        "parentId": 2,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Config PO Type Item Type",
                        "sl": 7,
                        "to": "/mngProcurement/purchase-management/configpotype-itemtype",
                        "isRoot": false,
                        "url": "/mngProcurement/purchase-management/configpotype-itemtype"
                    },
                    {
                        "id": 9,
                        "parentId": 2,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Purchase Order",
                        "sl": 8,
                        "to": "/mngProcurement/purchase-management/purchaseorder",
                        "isRoot": false,
                        "url": "/mngProcurement/purchase-management/purchaseorder"
                    },
                    {
                        "id": 10,
                        "parentId": 2,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Request For Quotation",
                        "sl": 9,
                        "to": "/mngProcurement/purchase-management/rfq",
                        "isRoot": false,
                        "url": "/mngProcurement/purchase-management/rfq"
                    },
                    {
                        "id": 11,
                        "parentId": 2,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Maintain RFQ",
                        "sl": 10,
                        "to": "/mngProcurement/purchase-management/maintain-rfq",
                        "isRoot": false,
                        "url": "/mngProcurement/purchase-management/maintain-rfq"
                    },
                    {
                        "id": 12,
                        "parentId": 2,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Comparative Statement",
                        "sl": 11,
                        "to": "/mngProcurement/comparative-statement",
                        "isRoot": false,
                        "url": "/mngProcurement/comparative-statement"
                    },
                    {
                        "id": 31,
                        "parentId": 2,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Purchase Return",
                        "sl": 30,
                        "to": "/mngProcurement/purchase-management/purchase-return",
                        "isRoot": false,
                        "url": "/mngProcurement/purchase-management/purchase-return"
                    }
                ]
            },
            {
                "id": 13,
                "parentId": 1,
                "level": 2,
                "icon": "simple-icon-briefcase",
                "name": "Configuration",
                "sl": 12,
                "to": "/mngProcurement/purchase-configuration",
                "isRoot": false,
                "url": "/mngProcurement/purchase-configuration",
                "children": [
                    {
                        "id": 14,
                        "parentId": 13,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Purchase Organization",
                        "sl": 13,
                        "to": "/mngProcurement/purchase-configuration/purchase-organization",
                        "isRoot": false,
                        "url": "/mngProcurement/purchase-configuration/purchase-organization"
                    },
                    {
                        "id": 32,
                        "parentId": 13,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Supplier",
                        "sl": 31,
                        "to": "/mngProcurement/purchase-configuration/supplier-group",
                        "isRoot": false,
                        "url": "/mngProcurement/purchase-configuration/supplier-group"
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "parentId": 0,
        "level": 1,
        "icon": " /media/svg/icons/iBOS/Inventory.svg",
        "name": "INVENTORY ",
        "sl": 4,
        "to": "/inventory-management",
        "isRoot": true,
        "url": "/inventory-management",
        "children": [
            {
                "id": 5,
                "parentId": 4,
                "level": 2,
                "icon": "/media/svg/icons/iBOS/Configuration.svg",
                "name": "Configuration",
                "sl": 5,
                "to": "/inventory-management/configuration",
                "isRoot": false,
                "url": "/inventory-management/configuration",
                "children": [
                    {
                        "id": 15,
                        "parentId": 5,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Plant",
                        "sl": 14,
                        "to": "/inventory-management/configuration/plant",
                        "isRoot": false,
                        "url": "/inventory-management/configuration/plant"
                    },
                    {
                        "id": 16,
                        "parentId": 5,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Warehouse",
                        "sl": 15,
                        "to": "/inventory-management/configuration/warehouse",
                        "isRoot": false,
                        "url": "/inventory-management/configuration/warehouse"
                    },
                    {
                        "id": 17,
                        "parentId": 5,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Config Plant Warehouse",
                        "sl": 16,
                        "to": "/inventory-management/configuration/conf-plant-warehouse",
                        "isRoot": false,
                        "url": "/inventory-management/configuration/conf-plant-warehouse"
                    },
                    {
                        "id": 18,
                        "parentId": 5,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Inventory Location",
                        "sl": 17,
                        "to": "/inventory-management/configuration/inventory-location",
                        "isRoot": false,
                        "url": "/inventory-management/configuration/inventory-location"
                    },
                    {
                        "id": 19,
                        "parentId": 5,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Loading Point",
                        "sl": 18,
                        "to": "/inventory-management/configuration/loadingpoint",
                        "isRoot": false,
                        "url": "/inventory-management/configuration/loadingpoint"
                    },
                    {
                        "id": 20,
                        "parentId": 5,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Shipping Point",
                        "sl": 19,
                        "to": "/inventory-management/configuration/shippingpoint",
                        "isRoot": false,
                        "url": "/inventory-management/configuration/shippingpoint"
                    },
                    {
                        "id": 33,
                        "parentId": 5,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Warehouse Location",
                        "sl": 32,
                        "to": "/inventory-management/configuration/warehouse-location",
                        "isRoot": false,
                        "url": "/inventory-management/configuration/warehouse-location"
                    },
                    {
                        "id": 34,
                        "parentId": 5,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Shiping Mode",
                        "sl": 33,
                        "to": "/inventory-management/configuration/shiping-mode",
                        "isRoot": false,
                        "url": "/inventory-management/configuration/shiping-mode"
                    },
                    {
                        "id": 35,
                        "parentId": 5,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Shping Provider",
                        "sl": 34,
                        "to": "/inventory-management/configuration/shiping-provider",
                        "isRoot": false,
                        "url": "/inventory-management/configuration/shiping-provider"
                    }
                ]
            },
            {
                "id": 21,
                "parentId": 4,
                "level": 2,
                "icon": "simple-icon-briefcase",
                "name": "Warehouse Management",
                "sl": 20,
                "to": "/inventory-management/warehouse-management",
                "isRoot": false,
                "url": "/inventory-management/warehouse-management",
                "children": [
                    {
                        "id": 22,
                        "parentId": 21,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Inventory Transaction",
                        "sl": 21,
                        "to": "/inventory-management/warehouse-management/inventorytransaction",
                        "isRoot": false,
                        "url": "/inventory-management/warehouse-management/inventorytransaction"
                    },
                    {
                        "id": 23,
                        "parentId": 21,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Customer Delivery",
                        "sl": 22,
                        "to": "/inventory-management/warehouse-management/delivery",
                        "isRoot": false,
                        "url": "/inventory-management/warehouse-management/delivery"
                    },
                    {
                        "id": 24,
                        "parentId": 21,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Item Request",
                        "sl": 23,
                        "to": "/inventory-management/warehouse-management/item-request",
                        "isRoot": false,
                        "url": "/inventory-management/warehouse-management/item-request"
                    },
                    {
                        "id": 25,
                        "parentId": 21,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "GRN For PO",
                        "sl": 24,
                        "to": "/inventory-management/warehouse-management/grnForPO",
                        "isRoot": false,
                        "url": "/inventory-management/warehouse-management/grnForPO"
                    },
                    {
                        "id": 26,
                        "parentId": 21,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Service Receive",
                        "sl": 25,
                        "to": "/inventory-management/warehouse-management/serviceReceive",
                        "isRoot": false,
                        "url": "/inventory-management/warehouse-management/serviceReceive"
                    },
                    {
                        "id": 27,
                        "parentId": 21,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Asset Receive",
                        "sl": 26,
                        "to": "/inventory-management/warehouse-management/assetReceive",
                        "isRoot": false,
                        "url": "/inventory-management/warehouse-management/assetReceive"
                    }
                ]
            },
            {
                "id": 28,
                "parentId": 4,
                "level": 2,
                "icon": "simple-icon-briefcase",
                "name": "Reports",
                "sl": 27,
                "to": "/inventory-management/reports",
                "isRoot": false,
                "url": "/inventory-management/reports",
                "children": [
                    {
                        "id": 29,
                        "parentId": 28,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Inventory Statement",
                        "sl": 28,
                        "to": "/inventory-management/reports/inventoryStatement",
                        "isRoot": false,
                        "url": "/inventory-management/reports/inventoryStatement"
                    },
                    {
                        "id": 30,
                        "parentId": 28,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Delivery Report",
                        "sl": 29,
                        "to": "/inventory-management/reports/deliveryReport",
                        "isRoot": false,
                        "url": "/inventory-management/reports/deliveryReport"
                    }
                ]
            },
            {
                "id": 36,
                "parentId": 4,
                "level": 2,
                "icon": "simple-icon-briefcase",
                "name": "Shipment",
                "sl": 35,
                "to": "/inventory-management/shipment",
                "isRoot": false,
                "url": "/inventory-management/shipment",
                "children": [
                    {
                        "id": 37,
                        "parentId": 36,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Shiping",
                        "sl": 36,
                        "to": "/inventory-management/shipment/shiping",
                        "isRoot": false,
                        "url": "/inventory-management/shipment/shiping"
                    }
                ]
            },
            {
                "id": 38,
                "parentId": 4,
                "level": 2,
                "icon": "simple-icon-briefcase",
                "name": "Inventory Issue",
                "sl": 37,
                "to": "/inventory-management/inventory-issue",
                "isRoot": false,
                "url": "/inventory-management/inventory-issue",
                "children": [
                    {
                        "id": 39,
                        "parentId": 38,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Issue",
                        "sl": 38,
                        "to": "/inventory-management/inventory-issue/issue",
                        "isRoot": false,
                        "url": "/inventory-management/inventory-issue/issue"
                    },
                    {
                        "id": 40,
                        "parentId": 38,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Issue Return",
                        "sl": 39,
                        "to": "/inventory-management/inventory-issue/issue-return",
                        "isRoot": false,
                        "url": "/inventory-management/inventory-issue/issue-return"
                    },
                    {
                        "id": 41,
                        "parentId": 38,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Customer Delivery",
                        "sl": 40,
                        "to": "/inventory-management/inventory-issue/customer-delivery",
                        "isRoot": false,
                        "url": "/inventory-management/inventory-issue/customer-delivery"
                    }
                ]
            },
            {
                "id": 42,
                "parentId": 4,
                "level": 2,
                "icon": "simple-icon-briefcase",
                "name": "Purchase Receive",
                "sl": 41,
                "to": "/inventory-management/purchase-receive",
                "isRoot": false,
                "url": "/inventory-management/purchase-receive",
                "children": [
                    {
                        "id": 43,
                        "parentId": 42,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Inventory Receive",
                        "sl": 42,
                        "to": "/inventory-management/purchase-receive/inv-receive",
                        "isRoot": false,
                        "url": "/inventory-management/purchase-receive/inv-receive"
                    },
                    {
                        "id": 44,
                        "parentId": 42,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Asset Receive",
                        "sl": 43,
                        "to": "/inventory-management/purchase-receive/asset-receive",
                        "isRoot": false,
                        "url": "/inventory-management/purchase-receive/asset-receive"
                    },
                    {
                        "id": 45,
                        "parentId": 42,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Service Receive",
                        "sl": 44,
                        "to": "/inventory-management/purchase-receive/service-receive",
                        "isRoot": false,
                        "url": "/inventory-management/purchase-receive/service-receive"
                    }
                ]
            },
            {
                "id": 46,
                "parentId": 4,
                "level": 2,
                "icon": "simple-icon-briefcase",
                "name": "Inventory Management",
                "sl": 45,
                "to": "/inventory-management/inv-management",
                "isRoot": false,
                "url": "/inventory-management/inv-management",
                "children": [
                    {
                        "id": 47,
                        "parentId": 46,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Item Request",
                        "sl": 46,
                        "to": "/inventory-management/inv-management/itm-req",
                        "isRoot": false,
                        "url": "/inventory-management/inv-management/itm-req"
                    },
                    {
                        "id": 48,
                        "parentId": 46,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Transfer",
                        "sl": 47,
                        "to": "/inventory-management/inv-management/transfer",
                        "isRoot": false,
                        "url": "/inventory-management/inv-management/transfer"
                    },
                    {
                        "id": 49,
                        "parentId": 46,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Repackege",
                        "sl": 48,
                        "to": "/inventory-management/inv-management/repack",
                        "isRoot": false,
                        "url": "/inventory-management/inv-management/repack"
                    },
                    {
                        "id": 50,
                        "parentId": 46,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Adjustment",
                        "sl": 49,
                        "to": "/inventory-management/inv-management/adjustment",
                        "isRoot": false,
                        "url": "/inventory-management/inv-management/adjustment"
                    },
                    {
                        "id": 51,
                        "parentId": 46,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Purchase Return",
                        "sl": 50,
                        "to": "/inventory-management/inv-management/pur-return",
                        "isRoot": false,
                        "url": "/inventory-management/inv-management/pur-return"
                    },
                    {
                        "id": 52,
                        "parentId": 46,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Sales Return",
                        "sl": 51,
                        "to": "/inventory-management/inv-management/sales-return",
                        "isRoot": false,
                        "url": "/inventory-management/inv-management/sales-return"
                    }
                ]
            }
        ]
    },
    {
        "id": 53,
        "parentId": 0,
        "level": 1,
        "icon": "/media/svg/icons/iBOS/Sales.svg",
        "name": "SALES MANAGEMENT",
        "sl": 52,
        "to": "/sales-management",
        "isRoot": true,
        "url": "/sales-management",
        "children": [
            {
                "id": 54,
                "parentId": 53,
                "level": 2,
                "icon": "simple-icon-briefcase",
                "name": "Order Management",
                "sl": 53,
                "to": "/sales-management/ordermanagement",
                "isRoot": false,
                "url": "/sales-management/ordermanagement",
                "children": [
                    {
                        "id": 55,
                        "parentId": 54,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Sales Quation",
                        "sl": 54,
                        "to": "/sales-management/ordermanagement/sales-quation",
                        "isRoot": false,
                        "url": "/sales-management/ordermanagement/sales-quation"
                    },
                    {
                        "id": 56,
                        "parentId": 54,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Sales Contract",
                        "sl": 55,
                        "to": "/sales-management/ordermanagement/sales-contact",
                        "isRoot": false,
                        "url": "/sales-management/ordermanagement/sales-contact"
                    },
                    {
                        "id": 57,
                        "parentId": 54,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Sales Order",
                        "sl": 56,
                        "to": "/sales-management/ordermanagement/sales-order",
                        "isRoot": false,
                        "url": "/sales-management/ordermanagement/sales-order"
                    },
                    {
                        "id": 58,
                        "parentId": 54,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Sales Return",
                        "sl": 57,
                        "to": "/sales-management/ordermanagement/sales-return",
                        "isRoot": false,
                        "url": "/sales-management/ordermanagement/sales-return"
                    }
                ]
            },
            {
                "id": 59,
                "parentId": 53,
                "level": 2,
                "icon": "simple-icon-briefcase",
                "name": "Configuration",
                "sl": 58,
                "to": "/sales-management/config",
                "isRoot": false,
                "url": "/sales-management/config",
                "children": [
                    {
                        "id": 60,
                        "parentId": 59,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Customer",
                        "sl": 59,
                        "to": "/sales-management/config/customer",
                        "isRoot": false,
                        "url": "/sales-management/config/customer"
                    },
                    {
                        "id": 61,
                        "parentId": 59,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Sales Organization",
                        "sl": 60,
                        "to": "/sales-management/config/sales-org",
                        "isRoot": false,
                        "url": "/sales-management/config/sales-org"
                    },
                    {
                        "id": 62,
                        "parentId": 59,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Sales Channel",
                        "sl": 61,
                        "to": "/sales-management/config/sales-channel",
                        "isRoot": false,
                        "url": "/sales-management/config/sales-channel"
                    },
                    {
                        "id": 63,
                        "parentId": 59,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Sales Territory",
                        "sl": 62,
                        "to": "/sales-management/config/sales-territory",
                        "isRoot": false,
                        "url": "/sales-management/config/sales-territory"
                    },
                    {
                        "id": 64,
                        "parentId": 59,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Trade Offer Item Group",
                        "sl": 63,
                        "to": "/sales-management/config/trade-offer-item",
                        "isRoot": false,
                        "url": "/sales-management/config/trade-offer-item"
                    },
                    {
                        "id": 65,
                        "parentId": 59,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Trade Offer Setup",
                        "sl": 64,
                        "to": "/sales-management/config/trade-offer-setup",
                        "isRoot": false,
                        "url": "/sales-management/config/trade-offer-setup"
                    },
                    {
                        "id": 66,
                        "parentId": 59,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Price Setup",
                        "sl": 65,
                        "to": "/sales-management/config/pricesetup",
                        "isRoot": false,
                        "url": "/sales-management/config/pricesetup"
                    },
                    {
                        "id": 67,
                        "parentId": 59,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Price Component",
                        "sl": 66,
                        "to": "/sales-management/config/price-component",
                        "isRoot": false,
                        "url": "/sales-management/config/price-component"
                    },
                    {
                        "id": 68,
                        "parentId": 59,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "Consumer Offer(Couppon)",
                        "sl": 67,
                        "to": "/sales-management/config/con-offer",
                        "isRoot": false,
                        "url": "/sales-management/config/con-offer"
                    },
                    {
                        "id": 69,
                        "parentId": 59,
                        "level": 3,
                        "icon": "simple-icon-briefcase",
                        "name": "User",
                        "sl": 68,
                        "to": "/sales-management/config/customer",
                        "isRoot": false,
                        "url": "/sales-management/config/customer"
                    }
                ]
            }
        ]
    },
    {
        "id": 70,
        "parentId": 0,
        "level": 1,
        "icon": "/media/svg/icons/iBOS/Accounts.svg",
        "name": "ACCOUNT & FINANCE",
        "sl": 69,
        "to": "/financialmanagement",
        "isRoot": true,
        "url": "/financialmanagement"
    }
]


export const tempMenu = [
    {
        "id": 1,
        "parentId": 0,
        "level": 1,
        "icon": "/media/svg/icons/iBOS/Procurement.svg",
        "name": "PROCUREMENT ",
        "sl": 1,
        "to": "/procurement-management",
        "isRoot": true,
        "url": "/procurement-management",
        "children": [
            {
                "id": 1,
                "parentId": 0,
                "level": 2,
                "icon": "/media/svg/icons/iBOS/Procurement.svg",
                "name": "Purchase",
                "sl": 1,
                "to": "/procurement-management",
                "isRoot": false,
                "url": "/procurement-management",
                "children": []
            },
            {
                "id": 1,
                "parentId": 0,
                "level": 2,
                "icon": "/media/svg/icons/iBOS/Procurement.svg",
                "name": "Configuration ",
                "sl": 1,
                "to": "/procurement-management/configuration",
                "isRoot": false,
                "url": "/procurement-management/configuration",
                "children": [
                    {
                        "id": 1,
                        "parentId": 0,
                        "level": 3,
                        "icon": "/media/svg/icons/iBOS/Procurement.svg",
                        "name": "Purchase Organization",
                        "sl": 1,
                        "to": "/procurement-management/configuration/purchase-organization",
                        "isRoot": false,
                        "url": "/procurement-management",
                        "children": []
                    },
                    {
                        "id": 1,
                        "parentId": 0,
                        "level": 3,
                        "icon": "/media/svg/icons/iBOS/Procurement.svg",
                        "name": "Supplier",
                        "sl": 1,
                        "to": "/procurement-management/configuration/supplier",
                        "isRoot": false,
                        "url": "/procurement-management/configuration/supplier",
                        "children": []
                    },
                ]
            }
        ]
    },
    {
        "id": 1,
        "parentId": 0,
        "level": 1,
        "icon": "/media/svg/icons/iBOS/Procurement.svg",
        "name": "Sales Management ",
        "sl": 1,
        "to": "/sales-management",
        "isRoot": true,
        "url": "/sales-management",
        "children": [
            {
                "id": 1,
                "parentId": 0,
                "level": 2,
                "icon": "/media/svg/icons/iBOS/Procurement.svg",
                "name": "Order Management",
                "sl": 1,
                "to": "/sales-management/order",
                "isRoot": false,
                "url": "/sales-management/order",
                "children": []
            },
            {
                "id": 1,
                "parentId": 0,
                "level": 2,
                "icon": "/media/svg/icons/iBOS/Procurement.svg",
                "name": "Configuration ",
                "sl": 1,
                "to": "/sales-management/configuration",
                "isRoot": false,
                "url": "/sales-management/configuration",
                "children": [
                    {
                        "id": 1,
                        "parentId": 0,
                        "level": 3,
                        "icon": "/media/svg/icons/iBOS/Procurement.svg",
                        "name": "Customer",
                        "sl": 1,
                        "to": "/sales-management/configuration/customer",
                        "isRoot": false,
                        "url": "/sales-management/configuration/customer",
                        "children": []
                    },
                ]
            }
        ]
    },
    {
        "id": 1,
        "parentId": 0,
        "level": 1,
        "icon": "/media/svg/icons/iBOS/Procurement.svg",
        "name": "Configuration ",
        "sl": 1,
        "to": "/configuration-management",
        "isRoot": true,
        "url": "/configuration-management",
        "children": [
            {
                "id": 1,
                "parentId": 0,
                "level": 2,
                "icon": "/media/svg/icons/iBOS/Procurement.svg",
                "name": "Basic Configuration",
                "sl": 1,
                "to": "/configuration-management/basic",
                "isRoot": false,
                "url": "/configuration-management/basic",
                "children": [
                    {
                        "id": 1,
                        "parentId": 0,
                        "level": 3,
                        "icon": "/media/svg/icons/iBOS/Procurement.svg",
                        "name": "Business Unit ",
                        "sl": 1,
                        "to": "/configuration-management/basic/business-unit",
                        "isRoot": false,
                        "url": "/configuration-management/basic/business-unit",
                        "children": []
                    },
                    {
                        "id": 1,
                        "parentId": 0,
                        "level": 3,
                        "icon": "/media/svg/icons/iBOS/Procurement.svg",
                        "name": "User ",
                        "sl": 1,
                        "to": "/configuration-management/basic/user",
                        "isRoot": false,
                        "url": "/configuration-management/basic/user",
                        "children": []
                    },
                    {
                        "id": 1,
                        "parentId": 0,
                        "level": 3,
                        "icon": "/media/svg/icons/iBOS/Procurement.svg",
                        "name": "Menu Permission",
                        "sl": 1,
                        "to": "/configuration-management/basic/menu-permission",
                        "isRoot": false,
                        "url": "/configuration-management/basic/menu-permission",
                        "children": []
                    }
                ]
            },
            {
                "id": 1,
                "parentId": 0,
                "level": 2,
                "icon": "/media/svg/icons/iBOS/Procurement.svg",
                "name": "Item Management ",
                "sl": 1,
                "to": "/configuration-management/item-management",
                "isRoot": false,
                "url": "/configuration-management/item-management",
                "children": [
                    {
                        "id": 1,
                        "parentId": 0,
                        "level": 3,
                        "icon": "/media/svg/icons/iBOS/Procurement.svg",
                        "name": "Item Profile ",
                        "sl": 1,
                        "to": "/configuration-management/item-management/item-profile",
                        "isRoot": false,
                        "url": "/configuration-management/item-management/item-profile",
                        "children": []
                    },
                    {
                        "id": 1,
                        "parentId": 0,
                        "level": 3,
                        "icon": "/media/svg/icons/iBOS/Procurement.svg",
                        "name": "Item Category ",
                        "sl": 1,
                        "to": "/configuration-management/item-management/item-category",
                        "isRoot": false,
                        "url": "/configuration-management/item-management/item-category",
                        "children": []
                    },
                    {
                        "id": 1,
                        "parentId": 0,
                        "level": 3,
                        "icon": "/media/svg/icons/iBOS/Procurement.svg",
                        "name": "Item SubCategory ",
                        "sl": 1,
                        "to": "/configuration-management/item-management/item-subcategory",
                        "isRoot": false,
                        "url": "/configuration-management/item-management/item-subcategory",
                        "children": []
                    },
                    {
                        "id": 1,
                        "parentId": 0,
                        "level": 3,
                        "icon": "/media/svg/icons/iBOS/Procurement.svg",
                        "name": "uom",
                        "sl": 1,
                        "to": "/configuration-management/item-management/uom",
                        "isRoot": false,
                        "url": "/configuration-management/item-management/uom",
                        "children": []
                    }
                ]
            }
        ]
    },
]