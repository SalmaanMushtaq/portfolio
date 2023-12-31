import { Box, Grid, Typography, Button } from "@mui/material";

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
      <Grid container spacing={2} className="container">
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
              I&apos;M SALMAAN MUSHTAQ
            </Typography>
            <Typography
              variant="h6"
              component="a"
              sx={{
                fontFamily: "Cinzel",
                fontWeight: 300,
                letterSpacing: ".1rem",
                color: "inherit",
                marginTop: 1,
              }}
            >
              Web Developer
            </Typography>
            <Button
              variant="outlined"
              href="./assets/cv/SalmaanMushtaq.pdf"
              download="SalmaanMushtaq-Resume.pdf"
              sx={{
                color: "white",
                borderColor: "white",
                marginTop: 2,
              }}
              startIcon={<i className="bi bi-download"></i>}
            >
              Download CV
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="./home.png"
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
