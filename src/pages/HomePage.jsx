import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Divider from "@mui/material/Divider";


const LandingPage = () => {

  const [userCount, setUserCount] = useState(0);
  

  const fetchUserQuantity = async () => {
    try{
      const users = await axios.get("user/");
      setUserCount(users.data["users_quantity"]);

    }catch(error){
      console.log(`An error appear when fetching user quantity: ${error.message}`);
    }
  }

  useEffect(() => {
    fetchUserQuantity();
  }, []);


  return (
    <>
      <Header /> 
      <Divider /> 
      <main>
      
        Monstrando a quantidade de usuarios dentro da landingpage:{userCount}

        <button onClick={fetchUserQuantity}> Recarregar contangem</button>

      </main>
  
    </>
  );
}



export default LandingPage;
