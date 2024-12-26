import React from "react";
import Heading from "./Components/Heading";
// import Title from "./Components/Title";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import FooterOne from "./Components/FooterOne";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import LastPage from "./Components/LastPage";
import Text from "./Animations/Text";
function App() {
  return <div>
    <Heading />
    <HeroSection />
    <FooterOne />
    <SecondPage />
    <ThirdPage />
    <LastPage />
    {/* <Text/> */}
  </div>;
}

export default App;