import React from 'react'

import {connect} from 'react-redux'

let style  = {
    height: "30vh",
    backgroundColor: "lightgreen",
    color: "white"
}

function APage(props) {

    const pageStyle = Object.assign({},style,{display:props.display})

    return(
        <div style={pageStyle}>
            <h1>APage: {props.display}</h1>
        </div>
    )
}
const mapStateToProps = (state) => {
    const value = state.current
    let result = "none"
    if(value === 'ALL' || value === 'A'){
        result = "block"
    }

    return {display:result}
}

export default connect(mapStateToProps)(APage)