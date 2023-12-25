import logo from './logo.svg';
import './App.css';
import User from './Class Components/User';
import React,{Component} from 'react';
import NestedComponents from './Functional Components/NestedComponents';
import NestedComponents1 from './Functional Components/NestedComponents1';
import ClickEvent from './Functional Components/ClickEvent';
import State from './Functional Components/State';
import Counter from './Functional Components/Counter';

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
      {/* <NestedComponents1/> */}
      {/* <ClickEvent/> */}
      {/* <State/> */}
      <Counter/>
    </div>
  );
}

export default App;
