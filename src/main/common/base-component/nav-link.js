import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function NavLink({ className, items, root }) {
    const [url, setUrl] = useState("")
    function expand(e) {
        if (url == e) {
            setUrl("")
        } else {
            setUrl(e)
        }
    }
    function isActive(currentUrl, level) {
        return url == currentUrl && level == 1 ? "menu-root-li-active" : ""
    }
    return (
        <ul className={root}>
            {
                items.map((item, index) => (
                    item.children?.length > 0 &&
                    <li
                        key={item.url}
                        className={`${isActive(item.url, item.level)}`}
                    >
                        <a
                            className="current-link"
                            onClick={() => expand(item.url)}
                        >
                            {/* <FontAwesomeIcon icon="coffee" /> */}
                            {item.name}

                        </a>
                        {
                            url == item.url &&
                            <NavLink
                                items={item.children}
                            />

                        }

                    </li>
                    ||
                    <li key={item.url} className={`${isActive(item.url, item.level)}`}
                    >
                        <Link to={item.url}>
                            <a className="current-link"
                                onClick={() => expand(item.url)}
                            >

                                {item.name}
                            </a>
                        </Link>
                    </li>
                )
                )
            }
        </ul>
    );
}

export default NavLink;