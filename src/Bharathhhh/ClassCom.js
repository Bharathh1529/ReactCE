// import React, { Component } from 'react'

// export default class ClassCom extends Component {
//     constructor(props)
//     {
//         super(props);
//         this.state={favoriteColor:"Blue"};
//     }
//     render() {
//         return (
//         <div>
//         <p>
//         My favoroite color is {this.state.favoriteColor}
//         </p>
//         </div>
//         )
//     }
// }

import React, { Component } from 'react'

export default class ClassCom extends Component {
    constructor(props)
    {
        super(props);
        this.state = { favoroiteColor: "blue" };
    }

    static getDerivedStateFromProps(props, state)
    {
        return {favoroiteColor: props.favcol};
    }
    render() {
    return (
      <div>
            <p>My favoroite color is {this.state.favoroiteColor}</p>  
      </div>
    )
  }
}
