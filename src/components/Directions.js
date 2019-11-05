import React from "react";

class Directions extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: this.props.directions
        }
    }

    render(){
        return (
            <div className="listView mx-auto clearfix">

                {<div className="listItems px-2 mx-auto"> 

                {this.props.directions ? this.props.directions.map(item => 
                <p className="dir-text">{item.text}
                <span className="for-dist float-right">{item.distance_desc}</span></p>
                ) : null}

                </div>}

            </div>
        )
    }
}
export default Directions;