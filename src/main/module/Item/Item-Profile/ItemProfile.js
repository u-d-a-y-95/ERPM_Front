import React, { useState, useEffect } from 'react'
import ItemProfileForm from './Form'
import { getList } from './http'
// import { getList, purchaseOrderDeleteData } from './http'
import ItemProfileTable from './Table';

function ItemProfile() {
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
                Item Basic Information
            </h3>
            <ItemProfileForm
                populateTable={populateTable}
                upDate={upDate}
                setUpData={setUpData}
            />
            <ItemProfileTable
                data={tableData}
                // deleteFromTable={deleteFromTable}
                updateToTable={updateToTable}
            />
        </>
    )
}


export default ItemProfile