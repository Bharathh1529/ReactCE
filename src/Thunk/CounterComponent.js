import React from 'react';
import { connect } from 'react-redux';
import { incAsync } from './Paction';
const CounterComponent = ({ counter, incAsync }) => {
return (
<div>
<p>Counter: {counter} </p>
<button onClick={incAsync}>Increment Asyne</button>
</div>
);
};

const mapStateToProps =(state)=>{
    return {
    counter: state.counter
    };
};
export default connect(mapStateToProps, { incAsync })(CounterComponent);