import React, { useState, useEffect } from 'react';
import NavLink from '../common/base-component/nav-link'
import MasterSelect from '../common/base-component/master-select'
import { menu, tempMenu } from '../constant/url.constant'
import '../../assets/css/sidebar.css'
import logo from "../../assets/image/erp-logo.png"
import ibosIcon from "../../assets/image/ibosIcon.png"
import http from "../services/http/http-client"
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { dataToDropdownData } from "../services/util/dropDownList"
import { setUserCurrentInfoBusinessUnitToState } from "../state/actions/user-current-info-action"

function Sidebar(props) {
    const dispatch = useDispatch()
    const { accountId, userId } = useSelector(state => state.currentInfo, shallowEqual)
    const [businessUnitList, setBusinessUnitList] = useState([])
    const [selectedBusinessUnit, setSelectedBusinessUnit] = useState({})

    useEffect(() => {
        // http.getData('/identity/Menu/GetList')
        //     .then(res => {
        //         // console.log(res)
        //     })
        console.log('test')
        http.getData(`/domain/BusinessUnit/GetListByAccountId/${accountId}/byUserId/${userId}`)
            .then(res => {
                setBusinessUnitList(dataToDropdownData(res.data, 'businessUnitId', 'businessUnitName'))
            })
    }, [])



    function onClickHandler(e) {
        console.dir(e.target.parentNode)
        if (e.target.parentNode.className.split(" ").includes("test")) {
            e.target.parentNode.style.backgroundColor = e.target.parentNode.style.backgroundColor ? "" : "#33AEE3"
        }
        if (e.target.nextElementSibling) {
            e.target.nextElementSibling.style.display = e.target.nextElementSibling.style.display ? "" : "block"
        }
    }

    return (
        <>
            <div className="company-logo d-flex justify-content-center  mt-3">
                {
                    props.isExpandSidebar ?
                        <img
                            style={{
                                width: "150px",
                                transition: "width"
                            }}
                            src={logo}
                            alt="ibosLOg"
                        />
                        :
                        < img
                            style={{
                                width: "25px"
                            }}
                            src={ibosIcon}
                            alt="ibosLOg"
                        />

                }

            </div>
            <div className="branchSelect">
                <MasterSelect
                    name="businessUnit"
                    data={businessUnitList}
                    value={selectedBusinessUnit}
                    onChange={selected => {
                        dispatch(setUserCurrentInfoBusinessUnitToState({
                            businessUnitId: selected.value
                        }))
                        setSelectedBusinessUnit(selected)
                    }}
                />
            </div>
            <div className="menu">
                <NavLink items={tempMenu} root="menu-root" />
            </div>


        </>
    )
}

export default Sidebar