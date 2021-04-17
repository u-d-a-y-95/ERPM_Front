import React, { useState,useEffect, useRef } from "react";
import "../../../assets/css/simple-master-list.css"
import MasterButton from "../base-component/master-button";


function SimpleMasterList(props) {
    
    const dataStore = props?.config?.data;
    const [actionModalStateList, setActionModalStateList] = useState(new Array(50))
    const searchKey = useRef(props.config.headers.filter(item => item['canSearch']).map(item => item['key']));
    const [dataSet, SetDataSet] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect( ()=>{
        SetDataSet(props.config.data)
    },[props.config.data])

    function clicked(row, actionItem) {
        actionItem["event"](row, actionItem);
    }
    function columClicked(row, header) {
        props.config.columnEvent(row, header);
    }

    function onSearch() {
        let data = [];
        if (searchKey.length > 0) {
            data = dataStore.filter(item => {
                let isValid = false;
                for (const i in searchKey) {
                    if (matchString(item[searchKey[i]], searchValue)) {
                        isValid = true;
                        break;
                    }
                }

                return isValid ? item : null
            });
        } else {
            data = dataStore.filter(item => {
                let isValid = false;
                for (const i in item) {
                    if (matchString(item[i], searchValue)) {
                        isValid = true;
                        break;
                    }
                }

                return isValid ? item : null
            })
        }

        SetDataSet(data)
    }
    function searchChangeHandler(e) {
        setSearchValue(e.target.value)
    }
    function searchEnterBtnPressed(e) {
        if(e.key==='Enter'){
            onSearch();
        }
        // setSearchValue(e.target.value)
    }
    function matchString(item, value) {
        return item.toString().trim().toLowerCase().indexOf(value.toString().trim().toLowerCase()) > -1 ? true : false;
    }

    function actionBtnClicked(index) {
        const data = new Array(props.config.data.length);
        data[index] = 1;
        if (actionModalStateList[index]) {
            data[index] = ""
        }
        setActionModalStateList(data)
    }

    return (
        <div className="table-card">
            {/* {loading && <Loading />} */}
            <div className="table-card-heading">
                <p>{props.config.headingTitle}</p>
            </div>
            {
                props.config.isSearchable ?
                    <div>
                        <div className="row d-flex justify-content-between mb-1">
                            <div className="col-md-4 col-lg-3 col-12 d-flex">
                                <input 
                                    className="form-control" 
                                    placeholder={`অনুসন্ধান করুন`} 
                                    value={searchValue} 
                                    onChange={searchChangeHandler} 
                                    onKeyPress={searchEnterBtnPressed}
                                    style={{
                                        borderTopRightRadius:"0",
                                        borderBottomRightRadius:"0"
                                    }}
                                    />
                                <MasterButton
                                    type="button"
                                    icon="fa fa-search"
                                    className="btn text-white"
                                    style={{
                                        backgroundColor:"#4965BB",
                                        width:"80px",
                                        borderTopLeftRadius:"0",
                                        borderBottomLeftRadius:"0"
                                    }}
                                    onClick={onSearch}
                                />
                            </div>
                        </div>
                    </div>
                    : null
            }

            <div className="master-list">
                <table className="table table-borderless simple-master-table">
                    <thead>
                        <tr key={'_index'} >
                            {props.config?.headers?.map((item, index) => {

                                return (
                                    <th key={index} style={item['hColStyle'] || item['style']} className={item['hColClass'] || item['class']}>{item["label"]}</th>
                                )
                            })}
                            {(props.config.action?.length > 0 && <th key={'actionBtnThIndex'} style={{ width: "10px" }}></th>) || null}
                        </tr>
                    </thead>
                    <tbody>
                        {dataSet?.map((item, dataIndex) => {
                            const listItem = item;
                            return (
                                <tr key={item[props.config?.identitykey]}>
                                    {props.config.headers.map((header, index) => {
                                        if (header["isClickAble"]) {
                                            return (
                                                <td key={index} style={header['bColStyle'] || header['style']} className={header['bColClass'] || header['class']} onClick={columClicked.bind(this, listItem, header)}>
                                                    {item[header["key"]]}
                                                </td>
                                            );
                                        }
                                        return <td key={index} style={header['bColStyle'] || header['style']} className={header['bColClass'] || header['class']} >{item[header["key"]]}</td>;
                                    })}
                                    {(props.config.action?.length > 0 && (
                                        <td style={{ width: "10px" }}>
                                            <span className="list-action">
                                                <i className="fa fa-ellipsis-v list-action-i" onClick={actionBtnClicked.bind(this, dataIndex)}></i>
                                                {
                                                    actionModalStateList[dataIndex] &&
                                                    <span className="list-action-overley">
                                                        {props.config.action.map((item, actionBtnIndex) => (
                                                            <MasterButton
                                                                key={actionBtnIndex}
                                                                onClick={clicked.bind(this, listItem, item)}
                                                                label={item["label"]}
                                                                icon={item["icon"]}
                                                                className={item["class"]}
                                                                iconClass={item["iconClass"]}
                                                            />
                                                        ))}
                                                    </span>
                                                }
                                            </span>
                                        </td>
                                    )) ||
                                        null}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SimpleMasterList;
