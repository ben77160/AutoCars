import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowAltCircleRight,
    faEnvelopeSquare,
    faPhoneSquare,
    faShoppingCart,
    faUser
} from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    return (
        <div className="">
            <div className="navbar navbar-expand-lg navbar-dark bg-dark header-navbar">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-navbar-list">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <FontAwesomeIcon icon={faPhoneSquare}/>&nbsp;
                                    Need Support? 1-8X0-666-8X88
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <FontAwesomeIcon icon={faEnvelopeSquare}/>&nbsp;
                                    info@themevessel.com
                                </a>
                            </li>
                        </ul>
                        <div className="navbar-text">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-navbar-list">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <FontAwesomeIcon icon={faArrowAltCircleRight}/>&nbsp;
                                        Connexion
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <FontAwesomeIcon icon={faUser}/>&nbsp;
                                        Inscription
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <FontAwesomeIcon icon={faShoppingCart}/>&nbsp;
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Carfax</a>
                                        <a className="dropdown-item" href="#">Carproof</a>
                                    </div>
                                </li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#"><span className="title-name">Auto Cars</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-navbar-light">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                   Accueil
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Liste de voitures
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Pièce Auto
                                </a>
                            </li>
                        </ul>
                        <div className="navbar-text">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-navbar-light">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}