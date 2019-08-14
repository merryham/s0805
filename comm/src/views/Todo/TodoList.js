import React, {Component} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class TodoList extends Component{

    
    constructor(props){
        super(props)
        console.log("constructor...")
        this.state={
            content:[],
            totalPages:0,
            loaded:false
        }
    }

    componentDidMount(){
        const page = this.props.match.params.page
        this.getData(page)
    }

    getData=(page)=>{
        axios.get("http://192.168.41.80:8080/todo/pages/"+page)
        .then(res => {
            console.log(res.data)
            this.setState( Object.assign({}, res.data,{loaded:true}))

        })
    }



    render(){
        console.log("render.........")
        const page = this.props.match.params.page
        const {content, totalPages} = this.state
        
        const list = content.map(({tno,title})=>{
            return(<li key={tno}>{title}</li>)
        })

        const linkArr=[]
        for (let i=1;i<=totalPages;i++){
            linkArr.push(<Link to={`/todoList/${i}`} key={i} onClick={()=> this.getData(i)}>   {i}  </Link>)
        }

        return(
            <div>
                <h1>Todo List {page}</h1>
                <ul>
                    {list}
                </ul>
                <div>
                    {linkArr}
                </div>
            </div>
        )
    }
}