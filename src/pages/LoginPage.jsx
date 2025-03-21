import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import LoginForm from "../components/LoginForm.jsx";

const LoginPage = () => {

  return(
    <>  
      <Header />
      <Divider />
      <LoginForm />
      <Footer />
    </>
  );
}

export default LoginPage;