import React from 'react'
import Link from './link'

function NavLink({ className, items }) {

    return (
        <ul className={className || ''}> {items.map(item => {
            return (
                <li>
                    <Link className={item?.children?.length > 0 ? "fa fa-caret-down right" : ""} {...item} />
                    {item?.children?.length > 0 && <NavLink className="sub-menu" items={item.children} />}
                </li>
            )
        })
        }
        </ul>
    );
}


export default NavLink;