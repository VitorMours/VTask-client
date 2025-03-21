import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Divider from "@mui/material/Divider";
import SignForm from "../components/SignForm.jsx";


const SignPage = () => {


  return(
    <>
      <Header />
      <Divider />
      <SignForm />
      <Footer />
    </>
  );
}


export default SignPage;
