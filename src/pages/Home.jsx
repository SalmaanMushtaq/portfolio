import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={2} className="container">
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mr: 2,
                ml: 3,
                fontFamily: "Cinzel",
                fontWeight: 600,
                letterSpacing: ".1rem",
                color: "inherit",
              }}
            >
              I&apos;M SALMAAN MUSHTAQ
            </Typography>
            <Typography
              variant="h6"
              component="a"
              sx={{
                mr: 2,
                ml: 3,
                fontFamily: "Cinzel",
                fontWeight: 300,
                letterSpacing: ".1rem",
                color: "inherit",
              }}
            >
              Web Developer
            </Typography>
            <a
              href="./assests/cv/SalmaanMushtaq.pdf"
              download="SalmaanMushtaq-Resume.pdf"
              className="downloadCvBtn"
            >
              <i className="bi bi-download"></i> Download CV
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="../src/assets/ownpictures/home.png"
              alt="Salmaan"
              loading="lazy"
              style={{ maxWidth: "100%", height: "auto" }}
              className="responsive-image"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
