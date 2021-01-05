import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Car1 from '../public/images/car-1.jpg'
import Car2 from '../public/images/car-2.jpg'
import Car3 from '../public/images/car-3.jpg'

const Carousel = () => {

    return(
             <div className="">
                 <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                     <ol className="carousel-indicators">
                         <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"/>
                         <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"/>
                         <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"/>
                     </ol>
                     <div className="carousel-inner">
                         <div className="carousel-item active" data-bs-interval="10000">
                             <img src={Car1} className="d-block w-100" alt="logo"/>
                                 <div className="carousel-caption d-none d-md-block">
                                     <h2>First slide label</h2>
                                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                      <div className="banner-max">
                                          <a href="" className="btn btn-lg btn-round btn-theme">Get Started Now</a>
                                          <a href="" className="btn btn-round btn-white-lg-outline">Learn more</a>
                                      </div>
                                 </div>
                         </div>
                         <div className="carousel-item" data-bs-interval="2000">
                             <img src={Car2} className="d-block w-100" alt="logo"/>
                                 <div className="carousel-caption d-none d-md-block">
                                     <h2>First slide label</h2>
                                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                     <div className="banner-max">
                                         <a href="" className="btn btn-lg btn-round btn-theme">Get Started Now</a>
                                         <a href="" className="btn btn-round btn-white-lg-outline">Learn more</a>
                                     </div>
                                 </div>
                         </div>
                         <div className="carousel-item">
                             <img src={Car3} className="d-block w-100" alt="logo"/>
                                 <div className="carousel-caption d-none d-md-block">
                                     <h2>First slide label</h2>
                                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                     <div className="banner-max">
                                         <a href="" className="btn btn-lg btn-round btn-theme">Get Started Now</a>
                                         <a href="" className="btn btn-round btn-white-lg-outline">Learn more</a>
                                     </div>
                                 </div>
                         </div>
                     </div>
                     <a className="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
                         <span className="" aria-hidden="false">
                             <FontAwesomeIcon icon={faAngleLeft}/>
                         </span>
                         <span className="visually-hidden">Previous</span>
                     </a>
                     <a className="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
                         <span className="" aria-hidden="true">
                             <FontAwesomeIcon icon={faAngleRight}/>
                         </span>
                         <span className="visually-hidden">Next</span>
                     </a>
                 </div>
             </div>
    );
}

export default Carousel;
