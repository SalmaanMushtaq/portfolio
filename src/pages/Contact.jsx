import { Box, Grid, TextField, Button } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

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
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            // minHeight: "100vh",
            marginTop: "2.5rem",
          }}
        >
          <Grid container spacing={2} className="container">
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
                      label="First name"
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Last name"
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={5}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="success"
                      variant="contained"
                      size="medium"
                      style={{ float: "right" }}
                    >
                      Send Message <i className="bi bi-arrow-right"></i>
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
