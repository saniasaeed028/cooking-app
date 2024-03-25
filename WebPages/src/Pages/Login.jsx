import React from "react";
import { Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import backgroundImage from "../assets/Gems/KitchenImage2.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
//import { DevTool } from "@hookform/devtools";
import { Box } from "@mui/material";
import { useState } from "react";
import AuthUser from "../AuthUser";
import "./HomePage";
const Login = () => {
  const { http, setJWTToken } = AuthUser();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("Entered Data", data);
    http
      .post("login", data)
      .then((res) => {
        console.log("Data posted successfully: ", res.data);
        setJWTToken(res.data.data);
        navigate("/HomePage");
      })
      .catch((error) => {
        if (error.response) {
          console.log("Response:", error.response.data);
          seterrorMessage(error.response.data.message);
          console.error("Server error: ", errorType);
        } else if (error.request) {
          console.log("No response received: ", error.request);
        } else {
          console.error("Error setting up the request:", error.message);
        }
      });
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [errorType, seterrorMessage] = useState("");
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
    bgcolor: "#CCCCCC",
    borderRadius: "13px",
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
          maxWidth: 1200,
          borderRadius: 16,
          border: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box m={3} mr={5} justifyContent={"center"} gap={3}>
          <Typography
            variant="h3"
            color="initial"
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Login
          </Typography>
          <Typography
            variant="h6"
            textAlign={"center"}
            color="initial"
            display={"block"}
            mb={7}
          >
            Welcome Back, Please login to your account
          </Typography>
          <Stack spacing={2}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={Boolean(errors.password || errorType)}
                  helperText={errors.password?.message || errorType}
                />
              )}
            />
            <Grid container display={"flex"} justifyContent={"space-between"}>
              <Grid item alignItems={"center"}>
                <Stack flexDirection={"row"} alignItems={"center"}>
                  <Checkbox {...label} />
                  <Typography variant="button" color="initial">
                    Remember Me
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Button varient="text" color="error">
                  Foget Password?
                </Button>
              </Grid>
            </Grid>
            <Button sx={StyledButton} onClick={handleSubmit(onSubmit)}>
              Login
            </Button>
            <Box mt={3}>
              <Typography
                variant="subtitle2"
                color="initial"
                textAlign={"center"}
              >
                Don't have a account?
              </Typography>
              <Typography
                variant="subtitle2"
                color="initial"
                textAlign={"center"}
                fontWeight={"bold"}
                sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
              >
                <Link to="/Registration">Register</Link>
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Divider orientation="vertical" flexItem>
          OR
        </Divider>
        <Box
          maxWidth={300}
          m={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container columns={1} justifyContent={"center"}>
            <Typography variant="h5" color="initial" textAlign={"center"}>
              Social Login
            </Typography>
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
              startIcon={<FacebookIcon />}
            >
              Login with Facebook
            </Button>
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
              startIcon={<LinkedInIcon />}
            >
              Login with LinkedIn
            </Button>
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
              color="error"
              startIcon={<GoogleIcon />}
            >
              Login with Google
            </Button>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
