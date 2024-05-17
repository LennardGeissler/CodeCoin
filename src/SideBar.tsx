import React from "react";
import "./home.scss"

const SideBar = () => {
    return (
        <aside>

            <div className="top">
                <div className="logo">
                    <img src="src/assets/ethereum.png" alt="" />
                    <h1>Code<span>Coin</span></h1>
                </div>

                <div className="close">
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </div>
            </div>

            <div className="bottom">
                <nav>
                    <ul>
                        <li>
                            <a href="">
                                <span className="material-symbols-outlined">
                                    dashboard
                                </span>
                                <h3>Dashboard</h3>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="material-symbols-outlined">
                                    person
                                </span>
                                <h3>Customers</h3>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="material-symbols-outlined">
                                    receipt_long
                                </span>
                                <h3>Orders</h3>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="material-symbols-outlined">
                                    query_stats
                                </span>
                                <h3>Analytics</h3>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="material-symbols-outlined">
                                    mail
                                </span>
                                <h3>Messages</h3>
                                <span className="messageCount">26</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="material-symbols-outlined">
                                    checklist
                                </span>
                                <h3>Products</h3>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="material-symbols-outlined">
                                    error
                                </span>
                                <h3>Reports</h3>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="material-symbols-outlined">
                                    settings
                                </span>
                                <h3>Settings</h3>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="material-symbols-outlined">
                                    add
                                </span>
                                <h3>Add Product</h3>
                            </a>
                        </li>
                        <li>
                            <a href="/login">
                                <span className="material-symbols-outlined">
                                    logout
                                </span>
                                <h3>Logout</h3>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default SideBar;