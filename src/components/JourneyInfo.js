import React from "react";

class ListView extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="mx-auto mh-75">
                <div className="row">
                    <h5 className="dist-text mx-auto">Distance</h5>
                    <h5 className="dur-text mx-auto">Duration</h5>
                </div>
                <div className="row">
                <p className="mx-auto dist">{this.props.distance_desc}</p>
                <p className="mx-auto dur">{this.props.duration}</p>
                </div>
            </div>
        )
    }
}

export default ListView;