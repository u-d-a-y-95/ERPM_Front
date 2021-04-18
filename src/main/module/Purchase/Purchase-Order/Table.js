import React from 'react';
import SimpleMasterTable from "../../../common/composite-component/simple-master-list"
import { tableConfig } from './util'


const PurchaseOrderTable = props => {
    const config = tableConfig
    config.data = props.data;
    config.action = [
        {
            icon: 'fa fa-trash',
            className: "btn btn-sm btn-warning text-white",
            event: (row) => {
                props.deleteFromTable(row.id)
            }
        },
        {
            icon: 'fa fa-edit',
            className: "btn btn-sm btn-primary text-white",
            event: (row) => {
                props.updateToTable(row)
            }
        },
    ]

    return (
        <>
            <SimpleMasterTable config={config} />
        </>
    )
}


export default PurchaseOrderTable