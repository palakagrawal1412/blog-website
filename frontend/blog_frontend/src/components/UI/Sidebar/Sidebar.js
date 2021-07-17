import React from "react";

import ax from "../../../hoc/ax/ax";
import NavigationItems from "../NavigationItems/NavigationItems";
import cssClass from "./Sidebar.css";
import Logo from "../Logo/Logo";

const sidebar = props => {
    let classes = [cssClass.Sidebar];
    if (props.isSidebarOpen) {
        classes.push(cssClass.Open);
    } else {
        classes.push(cssClass.Close);
    }

    return (
        <ax>
            <div className={classes.join(" ")} onClick={props.closed} >
                <Logo />
                <NavigationItems isAuth={props.isAuth} />
            </div>
        </ax>
    );
};

export default sidebar;
