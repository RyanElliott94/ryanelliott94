// TODO 
// 2. Convert App.js to class component
// 3. Move this code over to App.js
// 4. Create ListItem.js Component
// 5. pass journeyData to ListItem.js via props

import React from "react";
import journeyData from "../journeyData";
import App from "../App"

class MainContent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            api_key: "fc976e4e3387653d4bbbcf1237896b74",
            app_id: "ce97bad7",
            base_url: "https://transportapi.com/v3/uk/car/journey/from/",
            isLoading: false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(){
        fetch(`${this.state.base_url}/postcode%3A${this.state.from}/to/postcode%3A${this.state.to}.json?app_key=${this.state.api_key}&app_id=${this.state.app_id}`)
        .then(res => res.json())
        .then(jData => {
            jData.routes.map(item => {
                journeyData.distance = item.distance;
                journeyData.distance_desc = item.distance_desc;
                journeyData.duration = item.duration;
                journeyData.from_point_name = item.from_point_name;
                journeyData.to_point_name = item.to_point_name;
            });
        });
    }

    handleChange(event){
        var {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <div>
            <form className="p-0 m-0">
            <div class="form-inline mx-auto float-left p-3">
                <label className="mr-2" for="from-label">From</label>
                <input className="form-control mx-auto" type="text" id="from-label" name="from" onChange={this.handleChange} placeholder="Enter Post Code"></input>
            </div>
            <div class="form-inline mx-auto p-3">
                <label className="mr-2" for="to-label">To</label>
                <input className="form-control mx-auto" type="text" name="to" id="to-label" onChange={this.handleChange} placeholder="Enter Post Code"></input>
            </div>
            <button className="btn btn-sm btn-light" onClick={this.handleClick}>Search</button>
            </form>
            <hr></hr>
            </div>
        )
    }
}

export default MainContent;