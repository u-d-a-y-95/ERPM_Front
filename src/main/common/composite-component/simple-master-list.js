import React, {useState, useRef } from "react";
import MasterButton from "../base-component/master-button";


function SimpleMasterList(props) {
    const dataStore = props?.config?.data;
    const searchKey = useRef(props.config.headers.filter(item => item['canSearch']).map(item => item['key']));
    const [sortedKey, setSortedKey] = useState(props.config.headers.filter(item => item['canSort']).map(item => ({ key: item['key'], order: 'asc' })))
    const [dataSet, SetDataSet] = useState(props.config.data)
    const [searchValue, setSearchValue] = useState('')
    function clicked(row, actionItem) {
        actionItem["event"](row, actionItem);
    }
    function columClicked(row, header) {
        props.config.columnEvent(row, header);
    }
    function sortCol(key) {
        const sortedObj = sortedKey.find(item => item['key'] === key);
        const data = JSON.parse(JSON.stringify(dataSet));
        const sortedDataList = getSorted(data, sortedObj['order'], key);
        sortedObj.order = sortedObj['order'] === 'asc' ? 'desc' : 'asc';
        setSortedKey(sortedKey)
        SetDataSet(sortedDataList)
    }
    function getSorted(data, order, key) {
        if (typeof (data[0][key]) === 'number') {
            data.sort((a, b) => {
                return order === 'asc' ? b[key] - a[key] : a[key] - b[key];
            })
            return data;
        }
        data.sort((a, b) => {
            if (order === 'asc') {
                return b[key].toLowerCase() > a[key].toLowerCase() ? -1 : 1;
            }
            return b[key].toLowerCase() > a[key].toLowerCase() ? 1 : -1;
        })
        return data;
    }

    function onSearch(e) {
        let data = [];
        if (searchKey.length > 0) {
            data = dataStore.filter(item => {
                let isValid = false;
                for (const i in searchKey) {
                    if (matchString(item[searchKey[i]], e.target.value)) {
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
                    if (matchString(item[i], e.target.value)) {
                        isValid = true;
                        break;
                    }
                }

                return isValid ? item : null
            })
        }


        setSearchValue(e.target.value)
        SetDataSet(data)
    }
    function matchString(item, value) {
        return item.toString().trim().toLowerCase().indexOf(value.toString().trim().toLowerCase()) > -1 ? true : false;
    }
    return (
        <div className="table-card">
            {/* {loading && <Loading />} */}
            <div className="table-card-heading">
                <p>{props.config.headingTitle}</p>
            </div>
            {props.config.isSearchable ? <div  >
                <div className="row d-flex justify-content-between mb-3">
                    <div className="col-md-4 col-lg-3 col-12">
                        <input className="form-control" placeholder={`অনুসন্ধান করুন`} value={searchValue} onChange={onSearch} />
                    </div>
                </div>
            </div> : null}

            <div className="table-responsive">
                <table className="table custom-report-table">
                    <thead>
                        <tr className="master-table-header">
                            {props.config?.headers?.map((item, index) => {
                                if (item['canSort']) {
                                    return (
                                        <th key={index}  style={item['hColStyle'] || item['style']} className={item['hColClass'] || item['class']} onClick={sortCol.bind(this, item['key'])}>{item["label"]}{
                                            <span className={'fa fa-arrow-up'}></span>
                                        }</th>
                                    )
                                }
                                return (
                                    <th key={index} style={item['hColStyle'] || item['style']} className={item['hColClass'] || item['class']}>{item["label"]}</th>
                                )
                            })}
                            {(props.config.action?.length > 0 && <th style={props.config?.actionConfig?.style || null} className={props.config?.actionConfig?.class || null}>{'Action'}</th>) || null}
                        </tr>
                    </thead>
                    <tbody>
                        {dataSet?.map(item => {
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
                                        <td>
                                            {props.config.action.map((item, index) => (
                                                <MasterButton
                                                    key={index}
                                                    click={clicked.bind(this, listItem, item)}
                                                    label={item["label"]}
                                                    icon={item["icon"]}
                                                    className={item["class"]}
                                                    iconClass={item["iconClass"]}
                                                />
                                            ))}
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
