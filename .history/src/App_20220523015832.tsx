import React from "react";
import "./App.css";

import { Button } from "./components";
import {Navigation} from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Button text="Регистрация" color={"red"} />
      <Navigation text="Поиск" active={true}  />
    </div>
  );
}

export default App;
