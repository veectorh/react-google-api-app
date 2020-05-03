import React from 'react';
import './App.css';
import Home from './components/Home';
import { Allprovider } from './context/AllContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Previews from './components/Previews';

function App() {
  return (
    <Allprovider>
      <div className="App">
        <div className='container'>
        <Router>
          <Route path='/' exact component={Login} ></Route>
          <Route path='/home'  component={Home} ></Route>
          <Route path='/books/:bookid' exact component={Previews}></Route>
        </Router>
        </div>
      </div>
    </Allprovider>
  );
}

export default App;
