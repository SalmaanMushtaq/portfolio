import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";
import { useState } from "react";
const About = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null);
  };
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Grid container spacing={1} margin={2} alignItems="flex-start">
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="./about-me.jpeg"
                alt="Salmaan"
                loading="lazy"
                className="responsive-image"
                style={{
                  maxWidth: "65%",
                  height: "auto",
                  boxShadow: "10px 10px 25px whiteSmoke",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <h2>
              <i className="bi bi-person-circle" style={{ margin: "0" }}></i>{" "}
              About Me
              <div className="customLine">
                <span className="insideCustomLine"></span>
              </div>
            </h2>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "15%",
              }}
            >
              <p
                style={{
                  lineHeight: "1.5rem",
                  textWrap: "wrap",
                  textAlign: "justify",
                }}
              >
                &emsp;Hello there! 👋 I&apos;m SALMAAN MUSHTAQ, a passionate web
                developer with a keen eye for design and a love for crafting
                digital experiences. Based in Kashmir -India, I thrive on
                turning innovative ideas into reality through the power of code.
                <br />
                &emsp;🚀 My journey in web development began with a curiosity
                about how the web works, and it has since evolved into a dynamic
                skill set that spans HTML5, CSS3, and JavaScript. I believe in
                the transformative potential of technology to solve real-world
                problems and enhance user experiences.
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
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          margin: "15px",
          padding: "10px",
        }}
      >
        <h2 style={{ marginLeft: "15px" }}>
          <SchoolIcon style={{ marginRight: "15px" }} />
          Qualifications
          <div className="customLine">
            <span className="insideCustomLine"></span>
          </div>
        </h2>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          style={{ margin: "3% 0%" }}
        >
          <Grid item xs={12} sm={6}>
            <Accordion
              expanded={expandedAccordion === "secondary"}
              onChange={handleChangeAccordion("secondary")}
              sx={{
                backgroundColor: "inherit",
                color: "inherit",
                border: "1px solid white",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="secondary-education-content"
                id="secondary-education-header"
              >
                <Typography>Secondary Education</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Completed Secondary Education from JKBOSE (Jammu and Kashmir
                  Board of School Education).
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Accordion
              expanded={expandedAccordion === "seniorSecondary"}
              onChange={handleChangeAccordion("seniorSecondary")}
              sx={{
                backgroundColor: "inherit",
                color: "inherit",
                border: "1px solid white",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="senior-secondary-education-content"
                id="senior-secondary-education-header"
              >
                <Typography>Senior Secondary Education</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Completed Senior Secondary Education from JKBOSE (Jammu and
                  Kashmir Board of School Education), specializing in
                  Mathematics, Economics and English.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Accordion
              expanded={expandedAccordion === "graduation"}
              onChange={handleChangeAccordion("graduation")}
              sx={{
                backgroundColor: "inherit",
                color: "inherit",
                border: "1px solid white",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="graduation-content"
                id="graduation-header"
              >
                <Typography>B.Sc. Non-Medical</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Graduated with a degree in B.Sc. Non-Medical from the
                  University of Kashmir. Studied subjects including Mathematics,
                  Computer Science, and Statistics. Acquired a solid foundation
                  in mathematical principles, programming, and statistical
                  analysis.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Accordion
              expanded={expandedAccordion === "postGraduation"}
              onChange={handleChangeAccordion("postGraduation")}
              sx={{
                backgroundColor: "inherit",
                color: "inherit",
                border: "1px solid white",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="postgraduation-content"
                id="postgraduation-header"
              >
                <Typography>MCA (Master of Computer Applications)</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Completed post-graduation in MCA from Islamic University Of
                  Science and Technology. Specialized in programming,
                  algorithms, database management, and operating systems. Gained
                  expertise in software development and advanced computing
                  concepts.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
