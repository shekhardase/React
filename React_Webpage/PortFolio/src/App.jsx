import React from "react";
import Heading from "./Components/Heading";
import FirstHero from "./Components/FirstHero";
import QuickLinks from "./Components/QuickLinks";

import SmoothScroll from "./Components/SmoothScroll";
import UnamedSection from "./Components/UnamedSection";

function App() {
  return (
    <div>
      <Heading />

      <FirstHero />
      <QuickLinks />
      <SmoothScroll />
      <UnamedSection />
    </div>
  )
}

export default App;