import React from "react";
import "./Home.scss";
import TypeWriterEffect from "react-typewriter-effect";
import Menu from "./Menu.js";
import Footer from "./Footer";
import TextHelper from "./TextHelper";
import Instruction from "./Instruction";
const Home = () => {
  return (
    <div>
      <div className='main container'>
        <Menu />
        <div className='row justify-content-md-center main-text'>
          <h1 className="react-typewriter-text">Сервис RefsApi для работы с МРП и Календаря</h1>
          <TextHelper />
        </div>
      </div>
      <div className="container Dark" >
        <Instruction />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
