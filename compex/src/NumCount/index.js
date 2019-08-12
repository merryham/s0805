import React, {Component} from 'react'
import CounterButton from '/CounterButton';
import CounterDisplay from '/CounterDisplay';

export default class Counter extends Component{

    constructor(){
        super()

        this.state={
            count: 0
        }
    }

    render(){
        return(
            <Fragment>
                <CounterDisplay count={this.state.count}></CounterDisplay>

            </Fragment>
        )
    }

}
