import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import BannaerPro from "./Components/BannaerPro";
import Fetures from "./Components/Fetures";

function App() {
  return (
    <>
      <Navbar />
      <BannaerPro/>
      <Fetures/>
    </>
  );
}

export default App;
