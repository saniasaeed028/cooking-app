import { Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

// Import your background image
import backgroundImage from "../assets/Gems/KitchenImage2.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import "./HomePage";
const LandingPage = () => {
  const navigate = useNavigate();
  const bgImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Full height of the viewport
    width: "100vw", // Full width of the viewport
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const StyledButton = {
    bgcolor: "#E7E7E7",
    borderRadius: "16px",
    color: "black",
    "&:hover": { backgroundColor: "grey" },
    marginTop: 2, // Adjust the margin as needed
  };

  return (
    <Box sx={bgImageStyle}>
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
          padding: 5,
          maxWidth: 900,
          borderRadius: 16,
          border: 1,
          position: "relative", // Added to make positioning easier
        }}
      >
        <Typography
          variant="h3"
          color="initial"
          textAlign={"center"}
          mb={2}
          mt={3}
        >
          The Cooking App
        </Typography>
        <Box maxWidth={600} display={"flex"} justifyContent={"center"} ml={10}>
          <Typography variant="h6" color="initial" textAlign={"center"} mb={3}>
            Welcome to our Cooking App your culinary companion for delightful
            meals at your fingertips! Whether you're a pro or just starting, our
            user-friendly platform offers diverse recipes, easy instructions,
            and helpful tips. From quick weekday meals to special occasion
            dishes, we've got you covered. Unleash your inner chef, experiment
            with flavors, and savor the joy of cooking with our app. Let's turn
            your kitchen into a culinary haven!
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          mt={9}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              ...StyledButton,
              position: "absolute",
              left: "13%",
              padding: "15px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
            onClick={(e) => navigate("/login")}
          >
            Login
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              ...StyledButton,
              position: "absolute",
              left: "35%",
              padding: "15px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
            onClick={(e) => navigate("/registration")}
          >
            Registration
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              ...StyledButton,
              position: "absolute",
              left: "65%",
              padding: "15px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
            onClick={(e) => navigate("/HomePage")}
          >
            Explore
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
