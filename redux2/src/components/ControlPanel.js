import React from 'react'
import {connect} from 'react-redux'

const style ={
    color:"White",
    margin:"2em",
    backgroundColor: "lightblue"
}

const spanStyle ={
    padding:"2em"
}

function ControlPanel(props){

    const changePanel = (target) => {
        console.log("target : "+target)
        props.dispatch({type: "CHANGE", payload: target})
    }

    return(
        <div style={style}>
            <span style={spanStyle} onClick={()=>{changePanel('ALL')}}>ALL</span>
            <span style={spanStyle} onClick={()=>{changePanel('A')}}>APage</span>
            <span style={spanStyle} onClick={()=>{changePanel('B')}}>BPage</span>
            <span style={spanStyle} onClick={()=>{changePanel('C')}}>CPage</span>
        </div>
    )
}
export default connect()(ControlPanel)