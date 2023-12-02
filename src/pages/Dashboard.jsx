import React from 'react'
import './dashboard.css'
import { useNavigate } from "react-router-dom";
import Admin from '../components/Admin';
import Customer from '../components/Customer';
const Dashboard = ({ user,onLogout }) => {
    const navigate = useNavigate();
    const logOutHandle = async () => {
        onLogout()
        setTimeout(() => {
            navigate("/login");
        }, 1000)
    }

    return (
        <div>
            <header className="hContainer">
                <nav id="navID">
                    <div className="navtittle">
                        <img className="imglogo" src="https://1000logos.net/wp-content/uploads/2021/02/Clash-of-Clans-emblem.png" alt="coc-icon" />
                        <div className="icontxt">{user}</div>
                    </div>
                    <div className="ullist" id="menulist">
                        <ul className="ulnav" id="ulnavv">
                            <li className="listItem listItem1">
                                <button type='submit' onClick={logOutHandle}>LogOut</button>
                            </li>
                        </ul>
                    </div>
                    <div className="menubar" id="menubar">
                        <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i>
                    </div>
                </nav>
            </header>
            {
                user.includes('admin') || user.includes('customer') ?
                    <>
                        {user.includes('admin') && <Admin user={user} />}
                        {user.includes('customer') && <Customer user={user} />}
                    </> :
                    <div>
                        <h1>This is Normal portal</h1>
                    </div>
            }
        </div>
    )
}

export default Dashboard