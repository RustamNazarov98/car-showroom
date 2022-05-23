import React from "react";
import "./App.css";

import { Button } from "./components";
import { Card } from "./components/card/Card";
import { Footer_nav } from "./components/footer_nav/Footer_nav";
import { Input } from "./components/input/Input";
import {Navigation} from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Button text="Регистрация" color={"red"} />
      <Navigation text="Поиск" active={true}  />
      <Input text="не понял как изменять текст внутри инпута"/>
      <Card text="Nissan X-Trail"/>
      <Footer_nav text="О нас" />
    </div>
  );
}

export default App;
