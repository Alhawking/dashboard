import logo from '../assets/images/logo-DH.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt,faFolder,faChartArea,faTable } from '@fortawesome/free-solid-svg-icons'
import React from "react";
function SideBar (){
    return (
        <div className="col-3 container bg-secondary bg-gradient sidebar">
            <div className="row container-fluid mb-2">
                <a href="/"><img src={logo} alt="Logo de Digital House" className="img-fluid"/></a>
            </div>
            <div className="row col justify-content-center align-items-center ms-1 mb-3">
                <a href="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
                    <span >Dashboard - DH movies</span>
                </a>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="row">
                <span className="mb-2">Actions</span>
                </div>
                <ul className="col ms-3">
                    <li className="row align-items-center justify-content-center align-items-center">
                        <a href="/" className="nav-link text-black-50">
                            <FontAwesomeIcon icon={faFolder} className="me-2" />
                            <span>Pages</span>
                        </a>
                        </li>
                    <li className="row align-items-center">
                        <a href="/" className="nav-link text-black-50">
                            <FontAwesomeIcon icon={faChartArea} className="me-2" />
                            <span>Charts</span>
                        </a>
                    </li>
                    <li className="row align-items-center">
                        <a href="/" className="nav-link text-black-50">
                            <FontAwesomeIcon icon={faTable} className="me-2"/>
                            <span >Charts</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;