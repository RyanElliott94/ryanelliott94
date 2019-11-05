import React from "react";

class Spinner extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
            {this.props.loading === true ? 
            <div class="d-flex justify-content-center align-self-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            </div> : null}
    
            </div>
        )
    }
}

export default Spinner;