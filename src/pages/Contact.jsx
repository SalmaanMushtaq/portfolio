import { Box, Grid, TextField, Button, Alert } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useState } from "react";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "rgba(255, 255, 255, 0.546)",
            "--TextField-brandBorderHoverColor": "rgb(255, 255, 255)",
            "--TextField-brandBorderFocusedColor": "rgb(255, 255, 255)",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&::before, &::after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
              color: "white",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: "white",
          },
          label: {
            color: "white",
          },
        },
      },
    },
  });
const Contact = () => {
  const outerTheme = useTheme();
  const [successAlert, setSuccessAlert] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [emailValidation, setEmailValidation] = useState({
    error: false,
    helperText: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  function handleChnage(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    const isValid = validateEmail(value);
    setEmailValidation({
      error: !isValid,
      helperText: isValid ? "" : "enter a valid email address",
    });
  }
  function handleCloseSuccessAlert() {
    setSuccessAlert(false);
  }
  function handleSubmit() {
    const isValid = validateEmail(formData.email);
    if (!isValid) {
      setEmailValidation({
        error: !isValid,
        helperText: isValid ? "" : "Enter a valid email address",
      });
      return;
    }
    setIsSending(true);
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
    setSuccessAlert(true);
    setTimeout(function () {
      handleCloseSuccessAlert();
    }, 2000);
    setIsSending(false);
  }
  return (
    <>
      <Box
        sx={{
          margin: " 0px 20px",
          padding: "20px",
        }}
      >
        <h2>
          <i className="bi bi-person-rolodex"></i> Get In Touch
          <div className="customLine">
            <span className="insideCustomLine"></span>
          </div>
        </h2>
        {successAlert && (
          <Alert
            onClose={handleCloseSuccessAlert}
            variant="filled"
            color="success"
            className="alert-top"
          >
            Thank You!😊 I will get back to you soon.
          </Alert>
        )}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            minHeight: "auto",
            marginTop: "2.5rem",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <div style={{ lineHeight: "2.5rem" }}>
                <p>
                  <i className="bi bi-geo-alt-fill"></i> Srinagar, Jammu And
                  Kashmir, 190001
                </p>
                <p>
                  <i className="bi bi-envelope-at"></i>{" "}
                  khandaysalmaan00@gmail.com
                </p>
                <p>
                  <i className="bi bi-phone"></i> +91-7006172734
                </p>
                <Box style={{ marginTop: "6%" }}>
                  <small>
                    Share<strong>:</strong>
                    <a
                      href="https://www.facebook.com/your-facebook-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href="https://twitter.com/your-twitter-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-twitter text-white"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/your-linkedin-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-linkedin text-white"></i>
                    </a>
                    <a
                      href="https://github.com/your-github-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github text-white"></i>
                    </a>
                  </small>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={2}>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Enter your full name"
                      variant="outlined"
                      margin="normal"
                      id="fullName"
                      name="fullName"
                      onChange={handleChnage}
                      value={formData.fullName}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email address"
                      variant="outlined"
                      margin="normal"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChnage}
                      error={emailValidation.error}
                      helperText={emailValidation.helperText}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      value={formData.message}
                      rows={5}
                      variant="outlined"
                      margin="normal"
                      id="message"
                      name="message"
                      onChange={handleChnage}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="success"
                      variant="contained"
                      size="medium"
                      style={{ float: "right" }}
                      onClick={handleSubmit}
                    >
                      {isSending ? "Sending...." : "Send Message"}
                    </Button>
                  </Grid>
                </ThemeProvider>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
