import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";
import "./App.css";

class App extends React.Component {
  render() {
    // exact = отобраение в случае точного совпадения. Чтобы путь '/' не накладывался на '/about'
    return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
