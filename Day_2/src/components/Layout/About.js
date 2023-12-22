import React from "react";
import Layout from "./Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Appliance And Service Center</Typography>
        <p>
        Welcome to Appliance Service And Center, your trusted partner in comprehensive appliance services.
        At the heart of our mission is a commitment to providing top-quality repairs, maintenance, and installations.
        Our team comprises certified technicians with a wealth of experience, ensuring that your appliances are in expert hands.
        What sets us apart is our unwavering dedication to customer satisfaction.
        We prioritize your needs, offering a transparent pricing model with no hidden fees. 
        Whether it's a malfunctioning appliance or routine maintenance, 
        we take pride in delivering solutions that stand the test of time.  
        we're not just a service provider; we're your reliable ally in making sure your appliances run seamlessly. 
        Thank you for considering us—where excellence meets appliance care.


        </p>
        <br />
       
      </Box>
    </Layout>
  );
};

export default About;
