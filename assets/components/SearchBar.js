import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faSearch} from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {

    return (
        <div className="search-box">
              <div className="container">
                  <form className="row">
                      <div className="col-sm-5 mt-4 form-valid-input">
                          <input type="text" className="form-control" id="" placeholder="Marque, modèle, catégorie"/>
                      </div>
                      <div className="col-md-2 mt-4">
                          <select className="form-select" aria-label=".form-select-lg example">
                              <option selected>KM Max</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                      </div>
                      <div className="col-md-2 mt-4">
                          <select className="form-select" aria-label=".form-select-lg example">
                              <option selected>Prix Max</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                      </div>
                      <div className="d-grid gap-2 col mx-auto mt-4">
                          <button className="btn btn-dark" type="button"> <FontAwesomeIcon icon={faSearch}/>&nbsp;Recherche</button>
                      </div>
                  </form>
              </div>
        </div>
    )
}

export default SearchBar;