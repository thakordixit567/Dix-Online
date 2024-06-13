import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import BannaerPro from "./Components/BannaerPro";
import Fetures from "./Components/Fetures";
import BannerChild from "./Components/BannerChild";
import About from "./Components/About";
import Footer from "./Components/Footer";
import ChatPart from "./Components/ChatPart";

function App() {
  return (
    <div>
      <Navbar />
      <BannaerPro/>
      <Fetures/>
      <BannerChild/>
      <About/>
      <Footer/>
      <ChatPart/>
   </div>
  );
}

export default App;
