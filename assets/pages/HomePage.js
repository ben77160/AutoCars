import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
//import car1 from '../public/images/car-1.jpg'
import Car1 from '../public/images/car-1.jpg'
import Car2 from '../public/images/car-2.jpg'
import Car3 from '../public/images/car-3.jpg'

const HomePage = () => {
    return (
        <div className="container mt-lg-4">
            <div className="card-group">
                <div className="card">
                    <div className="car-thumbnail">
                        <div className="tag-2 bg-active">Vendu</div>
                        <div className="price-box">
                            <span className="del">
                                <del>€950.00</del>
                            </span>
                            <br/>
                            <span>€1050.00</span>
                        </div>
                        <img src={Car1} className="card-img-top" alt="..."/>
                        <div className="carbox-overlap-wrapper"/>
                    </div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Voir</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary"><FontAwesomeIcon icon={faPencilAlt}/>&nbsp;Modifier</button>
                                </div>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                </div>
                <div className="card car-thumbnail">
                    <div className="car-thumbnail">
                        <div className="price-box">
                            <span className="del">
                                <del>€950.00</del>
                            </span>
                            <br/>
                            <span>€1050.00</span>
                        </div>
                        <img src={Car2} className="card-img-top" alt="..."/>
                        <div className="carbox-overlap-wrapper"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This card has even longer content than the first to show
                            that equal height action.</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Voir</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary"><FontAwesomeIcon icon={faPencilAlt}/>&nbsp;Modifier</button>
                            </div>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="card car-thumbnail">
                    <div className="car-thumbnail">
                        <div className="tag-2 bg-active">Vendu</div>
                        <div className="price-box">
                            <span className="del">
                                <del>€950.00</del>
                            </span>
                            <br/>
                            <span>€1050.00</span>
                        </div>
                        <img src={Car1} className="card-img-top" alt="..."/>
                        <div className="carbox-overlap-wrapper"/>
                    </div>
                    <div className="carbox-overlap-wrapper"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This card has even longer content than the first to show
                                that equal height action.</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Voir</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary"><FontAwesomeIcon icon={faPencilAlt}/>&nbsp;Modifier</button>
                                </div>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;