import React from 'react';
import SimpleMasterTable from "../../../common/composite-component/simple-master-list"
import { tableConfig } from './util'


const ItemCategoryTable = props => {
    const config = tableConfig
    config.data = props.data;

    return (
        <>
            <SimpleMasterTable config={config} />
        </>
    )
}


export default ItemCategoryTable