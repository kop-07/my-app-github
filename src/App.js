import React from "react";
import './App.css';
import Navbar from "./components/Navbar"; 
import Carousel from "./page/Carousel";


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Carousel />
    </div>
  );
}

export default App;
