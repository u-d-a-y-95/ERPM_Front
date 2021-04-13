import React from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Holder from './holder'

function MainLayout() {
    return (
        <>
            <Header />
            <div className="d-flex main-holder">
                <Sidebar/>
                <Holder />
            </div>
        </>
    )
}

export default MainLayout