import React, {Component} from 'react'

export default class Sample2 extends Component{

    constructor(){
        super()
        this.state = {num:0}
    }

    increase = () =>{
        const value = ++this.state.num;
        alert("increase: "+ value)
        this.setState({num: value});
    }

    render(){
        return(
            <button onClick = {this.increase}>Sample2</button>
        )
    }
}


//함수형 컴포넌트는 상태를 유지하지 않는다. 단순한 뷰어이다.
//클래스형 컴포넌트는 상태를 유지(인스턴스 변수, 멤버변수)
//하위에 여러 컴포넌트를 가지고 있다.