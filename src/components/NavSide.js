import React, { useState } from "react";
import menu from "../icons/menu.svg"
import "./NavSide.css";

const CustomNav = ({ li }) => {
    const [window, setWindow] = useState(true);

    let openClose = () => {
        if (window === false) {
            setWindow(true);
        } else {
            setWindow(false);
        }
    };
    return (
        <nav
            className="navbar-menu"
            style={{ width: window === false ? 250 : 60 }}
        >
            <div className="burger" onClick={() => openClose()}>
                <img src={menu} alt="burger" />
            </div>
            <ul className="navbar__list">
                {li.map((item, i) => (
                    <div className="navbar__li-box" key={i}>
                        <img
                            src={item[1]}
                            alt={item[1]}
                            style={{ paddingLeft: window === false ? 27 : 17 }}
                        />
                        <li
                            className="navbar__li"
                            style={{
                                display:
                                    window === false ? "flex" : "none",
                            }}
                        >
                            {item[0]}
                        </li>
                    </div>
                ))}
            </ul>
        </nav>
    );
};

export default CustomNav;
