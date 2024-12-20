import React from "react";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import List from "./Components/List";
import Button from "./Components/Button";

function App() {

  return (
    <div>
      <Navbar />
      <Heading />
      <HeroSection />
      <List />
      <Button />
    </div>
  );
}


export default App;