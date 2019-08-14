import React, {Component} from 'react';
import MyPage from './pages/MyPage';
import Main from './pages/Main';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
export default class App extends Component{
  render(){
    return (
      <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/mypage">MyPage</Link></li>
            
          </ul>
        </nav>
        <Route path="/" exact Component={Main}></Route>
        <Route path="/mypage" exact Component={MyPage}></Route>
        <Main></Main>
        <MyPage></MyPage>
      </div>
      </Router>
    );
  }
}