import React, { useEffect, useState } from "react";
import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

import backgroundImage from "../assets/Gems/KitchenImage2.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import "./Login";
//import CountrySelect from "../components/Country";
import axios from "axios";
import { Box } from "@mui/material";
const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password", "");
  const onSubmit = async (data) => {
    console.log("Entered Data", data);
  };
  const [Next, setNext] = useState(0);
  const navigate = useNavigate();

  const [userType, setuserType] = useState(1);
  const handleUserType = (event) => {
    setuserType(parseInt(event.target.value, 10));
  };

  const handleRegister = async (data) => {
    await axios
      .post("http://localhost:8081/signup", data)
      .then((response) => {
        console.log("Data posted successfully: ", response.data);
        // Redirect the user to "/login" after successful sign-up
        navigate("/login");
      })
      .catch((error) => {
        if (error.response) {
          console.error("Server error: ", error.response.data);
        } else if (error.request) {
          console.log("No response recieved: ", error.request);
        } else {
          console.error("Error setting up the request:", error.message);
        }
      });

    console.log("UserType", userType);
    console.log("data: ", data);
  };
  const handleNext = async (data) => {
    navigate("/sellerDetails");
    console.log("Data", data);
  };
  console.log("Next", Next);
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
            Register
          </Typography>
          <Typography
            variant="h6"
            textAlign={"center"}
            color="initial"
            display={"block"}
            mb={2}
          >
            Welcome to the registration process
          </Typography>

          <Stack spacing={2}>
            <>
              {/* WHen the user is custom officer */}
              {userType === 3 ? (
                <>
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
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                      />
                    )}
                  />
                </>
              ) : (
                <>
                  <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "First Name is required",
                      pattern: {
                        value: /^[A-Z]+$/i,

                        message: "Please use letters only",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoComplete="FirstName"
                        error={Boolean(errors.FirstName)}
                        helperText={errors.FirstName?.message}
                      />
                    )}
                  />
                  <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Last Name is required",
                      pattern: {
                        value: /^[A-Z]+$/i,
                        message: "Please use letters only",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        error={Boolean(errors.LastName)}
                        helperText={errors.LastName?.message}
                      />
                    )}
                  />

                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Email ID is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid Email ID",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="outlined-basic"
                        label="Email ID"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        error={Boolean(errors.EmailID)}
                        helperText={errors.EmailID?.message}
                      />
                    )}
                  />

                  <Controller
                    name="country"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Country is required",
                      pattern: {
                        // Basic example for country names (allows letters, spaces, and common punctuation)
                        value: /^[A-Za-z\s.'-]+$/,

                        message: "Please enter a valid country name.",
                      },

                      // Add any other rules you need for Country
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="outlined-basic"
                        label="Country"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        error={Boolean(errors.Country)}
                        helperText={errors.Country?.message}
                      />
                    )}
                  />

                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character.",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                      />
                    )}
                  />
                  <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        error={Boolean(errors.confirmPassword)}
                        helperText={errors.confirmPassword?.message}
                      />
                    )}
                  />
                </>
              )}
            </>
          </Stack>
          <Stack spacing={2} mt={3}>
            {userType === 2 ? (
              <>
                <Button sx={StyledButton} onClick={handleSubmit(handleNext)}>
                  Next
                </Button>
              </>
            ) : (
              <>
                <Button
                  sx={StyledButton}
                  onClick={handleSubmit(handleRegister)}
                >
                  Register
                </Button>
              </>
            )}

            <Box mt={3}>
              <Typography
                variant="subtitle2"
                color="initial"
                textAlign={"center"}
              >
                Already have a account?
              </Typography>
              <Typography
                variant="subtitle2"
                color="initial"
                textAlign={"center"}
                fontWeight={"bold"}
                sx={{ "&:hover": { cursor: "pointer", color: "red" } }}
              >
                <Link to="/login">Login in</Link>
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
              Register With
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
