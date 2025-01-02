import React from "react";
import Heading from "./Components/Heading";
import FirstHero from "./Components/FirstHero";
import QuickLinks from "./Components/QuickLinks";
import Headingcopy from "./Components/Headingcopy";
import SmoothScroll from "./Components/SmoothScroll";

function App() {
  return (
    <div>
      <Heading />
      {/* <Headingcopy/> */}
      <FirstHero />
      <QuickLinks />
      <SmoothScroll />
    </div>
  )
}

export default App;