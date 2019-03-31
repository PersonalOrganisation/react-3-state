import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        on: true,
        working: false, 
        changeLogo:false
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
    this.setState({ changeLogo: !this.state.changeLogo });
  };

  render() {
    const working = this.state.working ? 'Il est en pause' : 'Il travaille';
    const changeLogo = this.state.changeLogo ? "App-logo-bis" : "App-logo";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={changeLogo} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button className="btnApp" onClick={this.handleClick}>Que fait Homer ?</button>
        <p>{working}</p>
        <Lamp on />
        <Lamp />
        <Quotes
          quote="Facts are meaningless. You could use facts to prove anything that's even remotely true."
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
      </div>
    );
  }
}


export default App;