import React,{Component} from "react";

class StaetClassCom extends Component
{
    state={
        color:"yellow"
    }
    handleChange=()=>{this.setState({color:"Red"})}
    render()
    {
        return(
        <div>
            <h1>The color I have selected is {this.state.color}</h1>
            <button onClick={this.handleChange}>Clickme</button>
        </div>
        )
    }
}
export default StaetClassCom;