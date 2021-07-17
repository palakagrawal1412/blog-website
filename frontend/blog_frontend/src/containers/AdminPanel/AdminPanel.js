import React, { Component } from "react";
import { Link } from "react-router-dom";

import ax from "../../hoc/ax/ax";
import cssClass from "./AdminPanel.css";

class AdminPanel extends Component {
    render() {
        return (
            <ax>
                <div className={cssClass.Title}>
                    <p>Admin Panel</p>
                </div>
                <div className={cssClass.OuterWrapper}>
                    {" "}
                    <div className={cssClass.InnerWrapper}>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/admin-panel/user-list"
                        >
                            <div className={cssClass.Container}>
                                View All Users
                            </div>
                        </Link>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/admin-panel/create-user"
                        >
                            <div className={cssClass.Container}>
                                Create A New User
                            </div>
                        </Link>
                    </div>
                    <div className={cssClass.InnerWrapper}>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/admin-panel/all-posts"
                        >
                            <div className={cssClass.Container}>
                                View All Posts
                            </div>
                        </Link>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/dashboard/create-new-post"
                        >
                            <div className={cssClass.Container}>
                                Create A New Post
                            </div>
                        </Link>
                    </div>
                    <div className={cssClass.InnerWrapper}>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/admin-panel/comments/list/all"
                        >
                            <div className={cssClass.Container}>
                                View All Comments
                            </div>
                        </Link>
                    </div>
                </div>
            </ax>
        );
    }
}

export default AdminPanel;
