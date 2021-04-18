import React, { useState, useEffect } from 'react'
import PurchaseOrderForm from './Form'
import PurchaseOrderTable from './Table'
import { getList, purchaseOrderDeleteData } from './http'
function PurchaseOrder() {
    const [tableData, setTableData] = useState([])
    const [upDate, setUpData] = useState({})
    useEffect(() => {
        populateTable()
    }, [])
    const populateTable = () => {
        getList(setTableData)
    }
    const deleteFromTable = (id) => {
        purchaseOrderDeleteData(id, populateTable)
    }
    const updateToTable = (row) => {
        row['description'] = row['body']
        setUpData(row)
    }
    return (
        <>
            <h1 className="">
                Purchase Order
            </h1>
            <PurchaseOrderForm
                populateTable={populateTable}
                upDate={upDate}
                setUpData={setUpData}
            />
            <PurchaseOrderTable
                data={tableData}
                deleteFromTable={deleteFromTable}
                updateToTable={updateToTable}
            />
        </>
    )
}


export default PurchaseOrder