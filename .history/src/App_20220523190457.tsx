import React from "react";
import "./App.css";

import { Button } from "./components";
import { Card } from "./components/card/Card";
import { Input } from "./components/input/Input";
import {Navigation} from "./components/navigation/Navigation";
import { Social_madia } from "./components/social_media/Social_madia";
import Twitter from './icons/Twitter.svg';

function App() {
  return (
    <div className="App">
      <Button text="Регистрация" color={"red"} />
      <Navigation text="Поиск" active={true}  />
      <Input text="не понял как изменять текст внутри инпута"/>
      <Card text="Nissan X-Trail"/>
      <Social_madia img={Twitter} />
    </div>
  );
}

export default App;
