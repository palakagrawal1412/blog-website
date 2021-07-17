import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import cssClass from "./Toolbar.css";
import HamburgerIcon from "../../../assets/images/hamburger.png";
import ax from "../../../hoc/ax/ax";

const toolbar = props => {
    return (
        <ax>
            <div className={cssClass.Toolbar}>
                <div className={cssClass.NavigationItems}>
                    <NavigationItems isAuth={props.isAuth}/>
                </div>
                <div className={cssClass.HamburgerIcon} onClick={props.clicked}>
                    <img
                        className={cssClass.HamburgerIcon}
                        src={HamburgerIcon}
                        alt="HamburgerIcon"
                    />
                </div>
            </div>
        </ax>
    );
};

export default toolbar;
