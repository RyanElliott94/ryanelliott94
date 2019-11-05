import React from 'react';
import './App.css';
import JourneyInfo from './components/JourneyInfo';
import journeyData from './journeyData';
import Directions from './components/Directions';
import Spinner from './components/Spinner';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      api_key: "fc976e4e3387653d4bbbcf1237896b74",
      app_id: "ce97bad7",
      base_url: "https://transportapi.com/v3/uk/car/journey/from/",
      isLoading: false,
      data: {},
      directions: {}
  }

  this.handleClick = this.handleClick.bind(this);
  this.handleChange = this.handleChange.bind(this);

  }

  handleClick(e){
    this.setState({isLoading: true});
    fetch(`${this.state.base_url}/postcode%3A${this.state.from}/to/postcode%3A${this.state.to}.json?app_key=${this.state.api_key}&app_id=${this.state.app_id}`)
    .then(res => res.json())
    .then(jData => {
        jData.routes.map(item => {
            journeyData.distance_desc = item.distance_desc;
            journeyData.duration = item.duration;
            journeyData.from_point_name = item.from_point_name;
            journeyData.to_point_name = item.to_point_name;
            journeyData.instructions = item.instructions;
        });
        this.setState({data: journeyData, instructions: journeyData.instructions});
        this.setState({isLoading:false});
        console.log(this.state.instructions)
    });
}

handleChange(event){
    var {name, value} = event.target;
    this.setState({
        [name]: value
    });
    value.toUpperCase();
}


   render() {
    return (
      <div>
            <form className="p-0 m-0">
            <div className="form-inline float-left mx-2">
                <label className="mr-2 mx-auto p-1" htmlFor="from-label">{this.state.data.from_point_name === undefined ? "From" : `From: ${journeyData.from_point_name}`}</label>
                <input style={this.state.data.from_point_name === undefined ? {display: "block"} : {display: "none"}} className="form-control mx-auto" type="text" id="from-label" name="from" onChange={this.handleChange} placeholder="Enter Post Code"></input>
            </div>
            <div className="form-inline mx-2">
                <label className="mr-2 mx-auto p-1" htmlFor="to-label">{this.state.data.to_point_name === undefined ? "To" : `To: ${journeyData.to_point_name}`}</label>
                <input style={this.state.data.from_point_name === undefined ? {display: "block"} : {display: "none"}} className="form-control mx-auto" type="text" name="to" id="to-label" onChange={this.handleChange} placeholder="Enter Post Code"></input>
                <button className="btn btn-sm align-self-center" type="button" onClick={this.handleClick}>Search</button>
            </div>
            </form>
            <hr/>
            <JourneyInfo distance_desc={journeyData.distance_desc} duration={journeyData.duration} />

            <Spinner loading={this.state.isLoading}/>

            <Directions directions={this.state.instructions} />
            </div>
    );
  }

}

export default App;