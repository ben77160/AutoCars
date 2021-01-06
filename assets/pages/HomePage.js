import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDollarSign, faHeadset, faPencilAlt, faShieldAlt} from "@fortawesome/free-solid-svg-icons";
//import car1 from '../public/images/car-1.jpg'
import Car1 from '../public/images/car-1.jpg'
import Car2 from '../public/images/car-2.jpg'
import Car3 from '../public/images/car-3.jpg'
import Avatar9 from '../public/images/avatar-9.jpg'
import Avatar11 from '../public/images/avatar-11.jpg'
import Avatar12 from '../public/images/avatar-12.jpg'
import {faHandshake} from "@fortawesome/free-solid-svg-icons/faHandshake";

const HomePage = () => {
    return (
        <div className="container mt-lg-4">
            <div>
                <h1 className="text-center">Nos voitures</h1>
            </div>
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
                        <img src={Car3} className="card-img-top" alt="..."/>
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


            <div>
                <h1 className="text-center">Nous sommes les meilleurs</h1>
            </div>
            <br/>
            <div className="row">
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <FontAwesomeIcon icon={faShieldAlt} className="icon-field"/>
                            </div>
                            <br/>
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <FontAwesomeIcon icon={faHandshake} className="icon-field"/>
                            </div>
                            <br/>
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <FontAwesomeIcon icon={faDollarSign} className="icon-field"/>
                            </div>
                            <br/>
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <FontAwesomeIcon icon={faHeadset} className="icon-field"/>
                            </div>
                            <br/>
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 text-center">
                    <a href="" className="btn btn-theme-btn important-btn mt-4">En savoir plus</a>
                </div>
            </div>

            <div className="row row-2 mt-4">
                <div className="col-lg-7 col-md-12">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-pad">
                            <div className="category">
                                <div className="category_bg_box cat-1-bg">
                                    <img src={Car1} className="card-img-top" alt="..."/>
                                    <div className="category-overlay">
                                        <div className="category-content">
                                            <div className="new">New</div>
                                            <div className="lo-text clearfix">
                                                <div className="price-box-2"><sup>$</sup>650<span>/month</span></div>
                                                <h3 className="category-title">
                                                    <a href="">Toyota Prius</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-pad">
                            <div className="category">
                                <div className="category_bg_box cat-2-bg">
                                    <img src={Car2} className="card-img-top" alt="..."/>
                                    <div className="category-overlay">
                                        <div className="category-content">
                                            <div className="new">New</div>
                                            <div className="lo-text clearfix">
                                                <div className="price-box-2"><sup>$</sup>740<span>/month</span></div>
                                                <h3 className="category-title">
                                                    <a href="">Lamborghini Huracan</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-pad">
                            <div className="category">
                                <div className="category_bg_box cat-3-bg">
                                    <img src={Car3} className="card-img-top" alt="..."/>
                                    <div className="category-overlay">
                                        <div className="category-content">
                                            <div className="new">New</div>
                                            <div className="lo-text clearfix">
                                                <div className="price-box-2"><sup>$</sup>950<span>/month</span></div>
                                                <h3 className="category-title">
                                                    <a href="">Lamborghini</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-pad">
                    <div className="category">
                        <div className="category_bg_box category_long_bg cat-4-bg">
                            <img src={Car1} className="card-img-top" alt="..."/>
                            <div className="category-overlay">
                                <div className="category-overlay">
                                    <div className="category-content">
                                        <div className="new">New</div>
                                        <div className="lo-text clearfix">
                                            <div className="price-box-2"><sup>$</sup>480<span>/month</span></div>
                                            <h3 className="category-title">
                                                <a href="">Red ferrari Car 2018</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row mt-4">
                <div className="col-lg-4">
                    <img src={Avatar9} alt="" className="bd-placeholder-img rounded-circle" width="140" height="140"/>

                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                        ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img src={Avatar11} alt="" className="bd-placeholder-img rounded-circle" width="140" height="140"/>

                    <h2>Heading</h2>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
                        tortor mauris condimentum nibh.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>

                <div className="col-lg-4">
                    <img src={Avatar12} alt="" className="bd-placeholder-img rounded-circle" width="140" height="140"/>

                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id
                        ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;