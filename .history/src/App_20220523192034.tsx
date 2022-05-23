import React from "react";
import "./App.css";

import { Button } from "./components";
import { Card } from "./components/card/Card";
import { Input } from "./components/input/Input";
import {Navigation} from "./components/navigation/Navigation";
import { SocialMedia } from "./components/social_media/SocialMedia";
import Twitter from './icons/Twitter.svg';

function App() {

  return (
    <div className="App">
      <Button text="Регистрация" color={"red"} />
      <Navigation text="Поиск" active={true}  />
      <Input text="не понял как изменять текст внутри инпута"/>
      <Card text="Nissan X-Trail"/>
      <SocialMedia img={Twitter} />
    </div>
  );
}

export default App;
