import { useState, useEffect } from "react";
import axios from "axios";


const LandingPage = () => {

  const [userCount, setUserCount] = useState(0);


  const fetchUserQuantity = async () => {
    try{
      const userQuantity = await axios.get("http://localhost:5000/user/quantity");
      setUserCount(userQuantity.data["user_quantity"]);
    }catch(error){
      console.log(`An error appear when fetching user quantity: ${error.message}`);
    }
  }

  useEffect(() => {
    fetchUserQuantity();
  }, []);


  return (
    <main>

      Monstrando a quantidade de usuarios dentro da landingpage:{userCount}

      <button onClick={fetchUserQuantity}> Recarregar contangem</button>

    </main>
  );
}



export default LandingPage;
