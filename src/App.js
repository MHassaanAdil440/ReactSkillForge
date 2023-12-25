import logo from './logo.svg';
import './App.css';
import User from './Class Components/User';
import React,{Component} from 'react';
import NestedComponents from './Functional Components/NestedComponents';
import NestedComponents1 from './Functional Components/NestedComponents1';

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
      {/* <NestedComponent/> */}
      <NestedComponents1/>
    </div>
  );
}

export default App;
