import React from 'react';
import './style.css';

function Vinsearch (props) {
    return(
        <div className="vin-search">
            <form>
                <div className="form-group">
                <label htmlFor="search">Search VIN:</label>
                <input
                onChange={props.handleInputChange}
                value={props.formObject}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search with VIN"
                id="search"
                />
                <button
                onClick={props.handleFormSubmit}
                className="btn btn-warning">
                    Search
                </button>
                </div>
            </form>
        </div>
    )
}

export default Vinsearch;