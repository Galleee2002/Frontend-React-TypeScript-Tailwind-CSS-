import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Button from "./components/button-component/Button";

function App() {
  return <div className="App">
    <Button onClick={()=>console.log("Hola Mundo!")} text="presiona aqui"></Button>
  </div>;
}

export default App;
