import React, { useState } from "react";
import NavBar from "./NavBar";
import './home.scss';
import SideBar from "./SideBar";

interface CryptoData {
    cryptoName: string;
    cryptoID: string;
    payment: string;
    status: string;
}

const orders: CryptoData[] = [
    {
        cryptoName: 'Bitcoin',
        cryptoID: '1027',
        payment: 'Due',
        status: 'Pending'
    },
    {
        cryptoName: 'Ethereum',
        cryptoID: '1027',
        payment: 'Paid',
        status: 'Delivered'
    },
    {
        cryptoName: 'Litecoin',
        cryptoID: '2',
        payment: 'Overdue',
        status: 'Declined'
    },
    {
        cryptoName: 'Ripple',
        cryptoID: '52',
        payment: 'Due',
        status: 'Pending'
    },
    {
        cryptoName: 'Cardano',
        cryptoID: '2010',
        payment: 'Overdue',
        status: 'Declined'
    },
    {
        cryptoName: 'Polkadot',
        cryptoID: '6636',
        payment: 'Paid',
        status: 'Delivered'
    },
    {
        cryptoName: 'Stellar',
        cryptoID: '512',
        payment: 'Paid',
        status: 'Delivered'
    },
    {
        cryptoName: 'Chainlink',
        cryptoID: '1975',
        payment: 'Due',
        status: 'Pending'
    },
    {
        cryptoName: 'Tezos',
        cryptoID: '2011',
        payment: 'Overdue',
        status: 'Declined'
    },
    {
        cryptoName: 'Monero',
        cryptoID: '328',
        payment: 'Paid',
        status: 'Delivered'
    }
]

const percentageOnlineOrders = "+39%";
const percentageOfflineOrders = "-17%";
const percentageEthereum = "+25%";

const Account = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedOrders = showAll ? orders : orders.slice(0, 6);

    const getColor = (value: string): string => {
        const numericValue = parseFloat(value.replace('%', ''));

        if (isNaN(numericValue)) {
            return 'rgba(#fff, 0.9)'; // Standardfarbe, falls der Wert keine gültige Zahl ist
        } else if (numericValue > 0) {
            return '#41f1b6'; // Grüne Farbe für positive Werte
        } else if (numericValue < 0) {
            return '#ff7782'; // Rote Farbe für negative Werte
        } else {
            return 'white'; // Weiße Farbe für den Wert 0
        }
    }

    return (
        <div className="account">
            <SideBar />
            <main className="dashboard">
                <h1>Dashboard</h1>

                <div className="date">
                    <input type="date" placeholder="dd / mm / yyyy" />
                </div>

                <section className="insights">
                    <div className="sales">
                        <span className="material-symbols-outlined">
                            monitoring
                        </span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Sales</h3>
                                <h1>$25,024</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle className="salesCircle" cx='38' cy='38' r='36'></circle>
                                </svg>

                                <div className="number">
                                    <p>81%</p>
                                </div>
                            </div>
                        </div>
                        <small>Last 24 hours</small>
                    </div>

                    <div className="expenses">
                        <span className="material-symbols-outlined">
                            bar_chart
                        </span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Expenses</h3>
                                <h1>$14,160</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle className="expensesCircle" cx='38' cy='38' r='36'></circle>
                                </svg>

                                <div className="number">
                                    <p>62%</p>
                                </div>
                            </div>
                        </div>
                        <small>Last 24 hours</small>
                    </div>

                    <div className="income">
                        <span className="material-symbols-outlined">
                            stacked_line_chart
                        </span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Income</h3>
                                <h1>$10,864</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle className="incomeCircle" cx='38' cy='38' r='36'></circle>
                                </svg>

                                <div className="number">
                                    <p>44%</p>
                                </div>
                            </div>
                        </div>
                        <small>Last 24 hours</small>
                    </div>
                </section>

                <h1 className="headlineRecentOrders">Recent Orders</h1>
                <section className="recentOrders">
                    <RecentOrders data={displayedOrders} />
                    {orders.length > 6 && (
                        <button className="toggleOrders" onClick={() => setShowAll(!showAll)}>
                            {showAll ? 'Show less' : 'Show more'}
                        </button>
                    )}
                </section>
            </main>
            <div className="accountRight">
                <section className="recentUpdates">
                    <h1>Recent Updates</h1>

                    <div className="recentUpdates-inner">
                        <div className="profile">
                            <img src="src/assets/profile-1.jpg" alt="" />
                            <div className="profile-text">
                                <p>Mike Tyson bought 2.82 Bitcoins with a value of $90,000.</p>
                                <span>2 Minutes Ago</span>
                            </div>
                        </div>

                        <div className="profile">
                            <img src="src/assets/profile-2.jpg" alt="" />
                            <div className="profile-text">
                                <p>Jack Houston declined his order of Ethereum with a volume of $12.300.</p>
                                <span>3 Hours Ago</span>
                            </div>
                        </div>

                        <div className="profile">
                            <img src="src/assets/profile-3.jpg" alt="" />
                            <div className="profile-text">
                                <p>Diana Ayl just registered and is now your new friend on CodeCoin.</p>
                                <span>5 Days Ago</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="salesAnalytics">
                    <h1>Sales Analytics</h1>

                    <div className="sale">
                        <div className="data">
                            <div className="icon iconOnlineOrders">
                                <span className="material-symbols-outlined">
                                    shopping_cart
                                </span>
                            </div>

                            <div className="offlineOrders">
                                <h3>ONLINE ORDERS</h3>
                                <small>Last 24 Hours</small>
                            </div>
                        </div>

                        <div className="stats">
                            <span className="change" style={{ color: getColor(percentageOnlineOrders) }}>
                                {percentageOnlineOrders}
                            </span>

                            <span className="volume">
                                3849
                            </span>
                        </div>
                    </div>

                    <div className="sale">
                        <div className="data">
                            <div className="icon iconOfflineOrders">
                                <span className="material-symbols-outlined">
                                    shopping_bag
                                </span>
                            </div>

                            <div className="offlineOrders">
                                <h3>OFFLINE ORDERS</h3>
                                <small>Last 24 Hours</small>
                            </div>
                        </div>

                        <div className="stats">
                            <span className="change" style={{ color: getColor(percentageOfflineOrders) }}>
                                {percentageOfflineOrders}
                            </span>

                            <span className="volume">
                                1100
                            </span>
                        </div>
                    </div>

                    <div className="sale">
                        <div className="data">
                            <div className="icon iconEthereum">
                                <span className="material-symbols-outlined">
                                    attach_money
                                </span>
                            </div>

                            <div className="onlineOrders">
                                <h3>ETHEREUM</h3>
                                <small>Last 24 Hours</small>
                            </div>
                        </div>

                        <div className="stats">
                            <span className="change" style={{ color: getColor(percentageEthereum) }}>
                                {percentageEthereum}
                            </span>

                            <span className="volume">
                                849
                            </span>
                        </div>
                    </div>

                    <div className="addProduct">
                        <span className="material-symbols-outlined">
                            add
                        </span>
                        <p>Add Product</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

const RecentOrders: React.FC<{ data: CryptoData[] }> = ({ data }) => {
    function statusColor(cryptoStatus: string) {
        switch (cryptoStatus) {
            case 'Pending':
                return 'rgb(255, 179, 92)';
            case 'Declined':
                return '#ff7782';
            case 'Delivered':
                return '#41f1b6';
            default:
                return 'cornflowerblue';
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Crypto Name</th>
                    <th>Crypto ID</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map(order => (
                    <tr>
                        <td>{order.cryptoName}</td>
                        <td>{order.cryptoID}</td>
                        <td>{order.payment}</td>
                        <td className="status" style={{ color: statusColor(order.status) }}>{order.status}</td>
                        <td className="details"><a href="">Details</a></td>
                    </tr>

                ))}
            </tbody>
        </table>
    )
}

export default Account;