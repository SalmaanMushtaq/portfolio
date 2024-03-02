import { Box, Grid, Typography, Button } from "@mui/material";
import IntroText from "../components/IntroText";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Works";
import Contact from "./Contact";
const Home = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "16px",
      }}
    >
      <Grid container spacing={2} className="container" sx={{ height: "auto" }}>
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Cinzel",
                fontWeight: 600,
                letterSpacing: ".1rem",
                color: "inherit",
              }}
            >
              🙋‍♂️ I&apos;M SALMAAN MUSHTAQ
            </Typography>
            {/* <Typography
              variant="p"
              component="span"
              sx={{
                fontFamily: "Cinzel",
                fontWeight: 300,
                letterSpacing: ".1rem",
                color: "inherit",
                marginTop: 1,
              }}
            > */}
            <IntroText />
            {/* </Typography> */}
            <Typography
              variant="h6"
              component="p"
              sx={{
                fontFamily: "Cinzel",
                fontWeight: 100,
                letterSpacing: ".1rem",
                color: "inherit",
                marginTop: 1,
                textAlign: "start",
                // padding: "3px",
                marginLeft: "50px",
              }}
            >
              Passionate software developer adept in HTML, CSS, JavaScript,
              Bootstrap, React.js, and jQuery. Specializing in crafting elegant
              and efficient web applications that resonate with end-users.
            </Typography>
            <Button
              variant="outlined"
              href="./assets/cv/SalmaanMushtaq.pdf"
              download="SalmaanMushtaq-Resume.pdf"
              className="button"
              sx={{
                color: "white",
                borderColor: "white",
                marginTop: 2,
              }}
              startIcon={<i className="bi bi-download"></i>}
            >
              <span className="button-content">Download CV</span>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="./assets/ownpictures/photo.png"
              alt="Salmaan"
              loading="lazy"
              style={{ maxWidth: "100%", height: "auto" }}
              className="responsive-image"
            />
          </Box>
        </Grid>

        {/* Other Components */}
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Grid>
    </Box>
  );
};

export default Home;
