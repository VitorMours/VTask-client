import React from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";


import Divider from "@mui/material/Divider";


import LandingPage from "./pages/HomePage.jsx";

const App = () => {
  return (
    <>
      <Header/>
      <Divider/>
      <LandingPage/>
      <Footer/>
    </>
  );
}


export default App;
