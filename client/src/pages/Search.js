import React, { Component } from 'react';
import CarResult from '../components/CarResult';
import VinSearch from '../components/Vinsearch';
import API from '../utils/API';
​
class Search extends Component {
    state= {
        search: "",
        result: []
    }
​
    componentDidMount ()  {
        this.searchCar();
    }
    searchCar = (query) => {
        API.getCarInfo(query)
        .then((res) => this.setState({ result: res.data }))
        .catch((err) => console.log(err));
    };
​
    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    };
​
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.searchCar(this.state.search);
    };
​
    render() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                <VinSearch
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                </div>
                <div className="col-sm-6">
                <CarResult
                result={this.state.result}
                />
                </div>
            </div>
        </div>
    )
}
}
export default Search;