import React, { useState } from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Holder from './holder'

function MainLayout() {
    const [isExpandSidebar, setExpendSidebarState] = useState(true)
    function hamburgerBtnPressed() {
        setExpendSidebarState(prevState => !prevState)
    }
    return (
        <>
            <div className="d-flex">
                <Sidebar isExpandSidebar={isExpandSidebar} />
                <div className="main-container">
                    <Header hamburgerBtnPressed={hamburgerBtnPressed} />
                    <Holder />
                </div>

            </div>
        </>
    )
}

export default MainLayout