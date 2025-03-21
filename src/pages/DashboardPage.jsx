import React from "react";
import { useState, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";



const DashboardPage = () => {
  const [mockedData, setMockedData] = useState([
    {
      "title": "794]5*DdDmWRHYU%02F%",
      "description": "7YL]4M7WkMQ9F7D",
      "status": true
    },
    {
      "title": "794]5*DdDmWRHYU%02F%",
      "description": "7YL]4M7WkMQ9F7D",
      "status": true
    },
    {
      "title": "794]5*DdDmWRHYU%02F%",
      "description": "7YL]4M7WkMQ9F7D",
      "status": true
    }
]);

  return(
    <>
    <Header></Header>
    <Divider></Divider>
    <Container className="min-h-dvh">
      <Typography variant="h2" sx={{ fontWeight: "bold" }}>User's tasks</Typography>

      <Paper elevation={3}>
        {mockedData.map((data, index) => (
          <Fragment key={index}>
            <Box
              sx={{ display:"flex", justifyContent:"flex-start", alignItems:"center" }}
            >
              <Checkbox></Checkbox>
              <Typography variant="body1" color="initial" sx={{ verticalAlign:"bottom" }}> Texto nada haver</Typography>
            </Box>
            {index < mockedData.length - 1 && <Divider />}
          </Fragment>
        ))}
      </Paper>
    </Container>
    <Footer></Footer>
    </>
  );
};

export default DashboardPage;