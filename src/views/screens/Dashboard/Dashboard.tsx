import { useState } from 'react'
import logo from '../../../assets/logo.svg'
export const Dashboard = () => {
    const [isShow, setIsShow] = useState(false);
    return (
        <div className="dashboard">
            <div className="sidebar">
                <nav className="navbar navbar-light bg-light justify-content-center">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" className="d-inline-block align-text-top me-1" alt="logo" />
                        Yentric
                    </a>
                </nav>
                <ul className="nav flex-column mt-2">
                    <li className="menu-header">DASHBOARD</li>
                    <li className="dropdown">
                        <a href="#" onClick={() => { setIsShow(false) }} data-bs-toggle="dropdown">Dashboard</a>
                        <ul className={`dropdown-menu position-relative ${isShow ? 'show' : ''}`}>
                            <li className="nav-item">
                                <a className="dropdown-item nav-link" aria-current="page" href="#">Active</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
            </div>
            <div className="dashboard-main">
                <div className="content">
                    testing
                </div>
            </div>
        </div>
    )
}
export default Dashboard