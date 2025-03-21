import React from "react";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


const SignForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {event.preventDefault();}; 
  const handleMouseUpPassword = (event) => {event.preventDefault();};

  const sendCredentials = ({ credential, password }) => {
    console.log("hi");
    const credentialsJson = JSON.stringify({"credential":credential, "password":password});
    const response = axios.post("/signup", credentialsJson);
    console.log(response);
    console.log(credentialsJson);
  }


  return (
    <main className="flex flex-col items-center justify-center w-full h-screen bg-whitesmoke -translate-y-20">
      <Typography  variant="h2" fontWeight="bold" color="primary" className="p-10">Sign in</Typography>
      <Paper className="flex justify-content w-2/5 h-1/2 p-12" elevation={3} square={false}>

        <form onSubmit={sendCredentials} className="w-full jus">   
          <div className="flex flex-col w-full h-full items-between">

            <div className="flex gap-x-4">
                  <TextField fullWidth margin="normal" size="small" variant="outlined" id="first-name-textfield" label="Your first name"/>
                  <TextField fullWidth margin="normal" size="small" variant="outlined" id="last-name-textfield" label="Your last name"/>
            </div>
              
            <TextField margin="normal" size="small" variant="outlined" id="email-textfield" label="Type your email"/>
            <TextField margin="normal" size="small" variant="outlined" id="check-email-textfield" label="Check your email"/>
              
            <div className="flex gap-x-4">
              <FormControl fullWidth margin="normal" size="small">
                <InputLabel htmlFor="password-outlined-input">Password</InputLabel>
                <OutlinedInput
                  type= {showPassword ? "text" : "password"}
                  id="password-outlined-input" 
                  label="Type a password" 
                  endAdornment ={
                    <InputAdornment position="end">
                      <IconButton 
                        onClick={handleClickPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff/>: <Visibility/>}
                      </IconButton>
                    </InputAdornment>
                  }/>
              </FormControl>
              
              <FormControl fullWidth margin="normal" size="small">
                <InputLabel htmlFor="check-password-outlined-input">Check your password</InputLabel>
                <OutlinedInput
                  id="check-password-outlined-input" 
                  label="Check your password" 
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton 
                        onClick={handleClickPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff/>: <Visibility/>}
                      </IconButton>
                    </InputAdornment>
                  }/>
              </FormControl>
            </div>

            <Button 
              variant="contained" sx={{ width:"200px", mx:"auto", my:"auto" }} >Fazer login</Button>
          </div>
        </form>
      </Paper>
    </main>
  );

}

export default SignForm;
