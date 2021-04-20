import React, { useState, useEffect } from 'react'
import ItemSubCategoryForm from './Form';
import { getList } from './http'
// import { getList, purchaseOrderDeleteData } from './http'
import ItemSubCategoryTable from './Table';

function ItemSubCategory() {
    const [tableData, setTableData] = useState([])
    const [upDate, setUpData] = useState({})
    const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
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
        setUpData(row)
    }
    return (
        <>
            <h3 className="">
                New Item Sub Category
            </h3>
            <ItemSubCategoryForm
                populateTable={populateTable}
                upDate={upDate}
                setUpData={setUpData}
            />
            <h3 className="my-2 text-center">Item Sub Category</h3>
            <ItemSubCategoryTable
                data={tableData}
                // deleteFromTable={deleteFromTable}
                updateToTable={updateToTable}
            />
        </>
    )
}


export default ItemSubCategory