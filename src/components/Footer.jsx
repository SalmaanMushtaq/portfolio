import { Box, Grid } from "@mui/material";
import styles from "./Footer.module.css";
import Logo from "./Logo";

function Footer() {
  return (
    <Box className={styles.footer} id="footer">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={2} md={2} lg={2}>
          <Logo />
        </Grid>
        <Grid item xs={6} md lg={6} sx={{ textAlign: "center" }}>
          <small>&copy; SMK 2023, Made with 💖 by Salmaan Mushtaq</small>
        </Grid>
        <Grid item xs lg={3} md>
          <Box>
            <small>
              Follow Me:
              <a
                href="https://fb.com/prince.elsa.9028"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com/username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter text-white"></i>
              </a>
              <a
                href="https://linkedin.com/in/salmaan-mushtaq-5b4998242"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin text-white"></i>
              </a>
              <a
                href="https://github.com/SalmaanMushtaq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github text-white"></i>
              </a>
            </small>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Footer;
