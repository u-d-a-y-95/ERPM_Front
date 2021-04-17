import React ,{ useState, useEffect } from 'react'

import '../../assets/css/holder.css'

import SimpleMasterList from "../common/composite-component/simple-master-list";
import http from "../services/http/http-client"


function Holder() {

    const [data, setData] = useState()

    useEffect(() => {
        http.getData('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data)
                setData(prev => {
                    return res.data
                })
                console.log(config)
            })
    }, [])

    const config = {
        identitykey: "id",
        headers: [
            {
                key: 'id',
                label: 'ID',
            },
            {
                key: 'title',
                label: 'Title'
            },
            {
                key: 'body',
                label: 'Dtails'
            },
        ],

        data: data,

        checkbox: true,
        isSearchable: true

    }



    return (
        <div className="holder h-100 p-5">
            <SimpleMasterList config={config} />
        </div>
    )
}

export default Holder