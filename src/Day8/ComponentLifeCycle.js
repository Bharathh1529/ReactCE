import React, { Component } from 'react'

export default class ComponentLifeCycle extends Component {
  
    constructor(props)
    {
        super(props);
        this.state={
            favcolor: "lightblue"
        }
    }

    componentDidMount()
    {
        setTimeout(()=>this.setState({favcolor:"voilet"}),5000)
    }

    shouldComponentUpdate()
    {
        return true
    }
    getSnapshotBeforeUpdate(prevprops,prevstate)
    {
        document.getElementById("id1").innerHTML="Previous value "+prevstate.favcolor;
    }

    componentDidUpdate()
    {
        document.getElementById("id2").innerHTML="Cuurent value" + this.state.favcolor;
    }
    componentWillUnmount()
    {
        
    }
    render() {
    return (
      <div>
        <h1>My Favorite color is {this.state.favcolor}</h1>        
        <p id="id1"></p>
        <p id="id2"></p>
      </div>
    )
  }
}
