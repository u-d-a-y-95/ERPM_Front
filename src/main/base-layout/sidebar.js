import React from 'react';
import NavLink from '../common/base-component/nav-link'
import {menu} from '../constant/url.constant'

function Sidebar() {
    const menuList = menu;
    return (
        <div className="sidebar">

                <NavLink items={menuList} />
    
           
        </div>
    )
}

export default Sidebar