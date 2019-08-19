import React from 'react'
import {connect} from 'react-redux'
import EvenOddDisplay from './EvenOddDisplay';

function CountReduxDisplay(props) {
    return(
        <div>
            <h1>REDUX COUNT: {props.count}</h1>
            <EvenOddDisplay></EvenOddDisplay>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("=============",state)
    return{count: state.count}
}

export default connect(mapStateToProps)(CountReduxDisplay)