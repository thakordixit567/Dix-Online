import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import BannaerPro from "./Components/BannaerPro";
import Fetures from "./Components/Fetures";
import BannerChild from "./Components/BannerChild";

function App() {
  return (
    <>
      <Navbar />
      <BannaerPro/>
      <Fetures/>
      <BannerChild/>
    </>
  );
}

export default App;
