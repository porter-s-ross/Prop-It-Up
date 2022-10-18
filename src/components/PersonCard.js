import React, {Component} from 'react';



class PersonCard extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            counter: this.props.age
        }
    }

    increaseAge = () => {
        this.setState({
            counter: this.state.counter + 1
        }) 
    }


    render()
    {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>Age: {this.state.counter}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.increaseAge}>Birthday Button for {this.props.name}</button>
            </div>
        )
    }
}

export default PersonCard;
