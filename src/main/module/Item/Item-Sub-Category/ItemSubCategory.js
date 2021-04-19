import React, { useState, useEffect } from 'react'
import ItemSubCategoryForm from './Form';
import { getList } from './http'
// import { getList, purchaseOrderDeleteData } from './http'
import ItemSubCategoryTable from './Table';

function ItemSubCategory() {
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
                Item Sub Category
            </h3>
            <ItemSubCategoryForm
                populateTable={populateTable}
                upDate={upDate}
                setUpData={setUpData}
            />
            <ItemSubCategoryTable
                data={tableData}
                // deleteFromTable={deleteFromTable}
                updateToTable={updateToTable}
            />
        </>
    )
}


export default ItemSubCategory