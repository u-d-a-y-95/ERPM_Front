import React from 'react'
import Link from './link'

function NavLink({ className, items }) {
    function onClickHandler(e) {
        if (e.target.nextElementSibling) {
          e.target.nextElementSibling.style.display = e.target.nextElementSibling.style.display ? "" : "block"
        }
      }
    return (
        <div className="menu-sub">
            {
                items.map((item, index) => {
                    return (<div className="menu-sub-li">
                        <span className="menu-li-link" onClick={onClickHandler}>
                            <i className={`${item.icon} mr-2`}></i>
                            {item.label}</span>
                        {
                            item.children && <NavLink items={item.children} />
                        }
                    </div>)
                })
            }
        </div>
    );
}


export default NavLink;