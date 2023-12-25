import logo from './logo.svg';
import './App.css';
import User from './Class Components/User';
import React,{Component} from 'react';
import NestedComponent from './Functional Components/NestedComponents';

class User1 extends Component{
  render(){
    return(
      <h1>Hello From Class Component in App.js</h1>
    )
  }
}

function App() {
  return (
    <div className="App">
      {/* <User/>
      <User1/> */}
      <NestedComponent/>
    </div>
  );
}

export default App;
