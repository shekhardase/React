import React from "react";
import Heading from "./Components/Heading";
import FirstHero from "./Components/FirstHero";
import QuickLinks from "./Components/QuickLinks";
// impor QuickLinks
import SmoothScroll from "./Components/SmoothScroll";

function App() {
  return (
    <div>
      <Heading />
      <FirstHero />
      <QuickLinks />
      <SmoothScroll />
    </div>
  )
}

export default App;