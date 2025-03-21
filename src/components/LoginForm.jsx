import React from "react";
import { useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    credential:"",
    password:""
  });

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  const sendCredentials = async ({credential, password }) => {
    try{
      const credentialsJson = {credential, password};
      const response = await axios.post("/login", credentialsJson);
      console.log(response);
      console.log(credentialsJson);
    }catch(error){
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendCredentials(formData);
  }

  return(
    <main className="flex flex-col items-center justify-center bg-whitesmoke h-screen -translate-y-20">
      <Typography variant="h2" fontWeight="bold" color="primary" className="p-10">Log In</Typography>
      <Paper className="flex flex-col justify-content lg:w-2/5 sm:w-3/5 h-2/6 p-12" elevation={3} square={false}>
      <form onSubmit={handleSubmit} className="w-full">   

        <Stack sx={{justifyContent:"space-between", height:"100%"}}>
          <div className="flex flex-col w-full">
            <div className="flex-gap-4">
              <FormControl fullWidth margin="normal" size="small">
                <InputLabel>Digite a sua Credencial</InputLabel>
                <OutlinedInput name="credential" value={formData.credential} onChange={handleChange} label="Digite a sua Credencial"></OutlinedInput>
              </FormControl>

              <FormControl fullWidth margin="normal" size="small">
                <InputLabel>Digite a sua Senha</InputLabel>
                <OutlinedInput name="password" type="password" value={formData.password} onChange={handleChange} label="Digite a sua Senha"></OutlinedInput>
              </FormControl>
            </div>
            <Box sx={{ display: "flex", mt: 1, justifyContent: "flex-end"}}>
              <Link href="/signin">Nao possui conta?</Link>
            </Box>
          </div>

            <Button variant="contained" type="submit" sx={{}}>Log In</Button>
        </Stack>
      </form>
      </Paper>
    </main>


  );
}


export default LoginForm;