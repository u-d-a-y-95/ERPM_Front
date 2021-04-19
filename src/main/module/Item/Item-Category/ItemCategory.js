import React, { useState, useEffect } from 'react'
import ItemCategoryForm from './Form';
import { getList } from './http'
// import { getList, purchaseOrderDeleteData } from './http'
import ItemCategoryTable from './Table';

function ItemCategory() {
    const [tableData, setTableData] = useState([])
    const [upDate, setUpData] = useState({})
    useEffect(() => {
        populateTable()
    }, [])
    const populateTable = () => {
        getList(setTableData)
    }
    // const deleteFromTable = (id) => {
    //     purchaseOrderDeleteData(id, populateTable)
    // }
    const updateToTable = (row) => {
        // console.log(row)
        row['description'] = row['body']
        setUpData(row)
    }
    return (
        <>
            <h3 className="">
                Item Category
            </h3>
            <ItemCategoryForm
                populateTable={populateTable}
                upDate={upDate}
                setUpData={setUpData}
            />
            <ItemCategoryTable
                data={tableData}
                // deleteFromTable={deleteFromTable}
                updateToTable={updateToTable}
            />
        </>
    )
}


export default ItemCategory