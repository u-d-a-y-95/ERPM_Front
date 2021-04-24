import React, { useState } from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Holder from './holder'

function MainLayout() {


    // style={props.isExpandSidebar ? { width: "250px" } : { width: "70px" }}

    return (
        <div className="app-holder">
            <div className="sidebar" >
                <Sidebar />
            </div>
            <div className="main-content">
                <div className="upbar">
                    <Header />
                </div>
                <div className="main-content-body">
                    <Holder />
                </div>
            </div>

        </div>
    )
}

export default MainLayout