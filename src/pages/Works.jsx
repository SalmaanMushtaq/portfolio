import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  CardActions,
  CardHeader,
} from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import GitHubIcon from "@mui/icons-material/GitHub";
const worksData = [
  {
    id: 1,
    title: "Calculator",
    description: "test description",
    image: "/assets/projects/project1.png",
    githubLink: "https://github.com/SalmaanMushtaq/Skybug/tree/main/calculator",
    date: "25 December 2023",
  },
  {
    id: 2,
    title: "React Quiz",
    description: "test description number two",
    image: "/assets/projects/project2.png",
    githubLink:
      "https://github.com/SalmaanMushtaq/React-projects/tree/main/06-react-quiz",
    date: "01 November 2023",
  },
  {
    id: 3,
    title: "Project Camp",
    description: "test description number two",
    image: "/assets/projects/project3.png",
    githubLink: "https://github.com/SalmaanMushtaq/projectCamp",
    date: "20 April 2022",
  },
  {
    id: 4,
    title: "Pizza Menu",
    description: "test description number two",
    image: "/assets/projects/project3.png",
    githubLink:
      "https://github.com/SalmaanMushtaq/React-projects/tree/main/01-pizza-menu",
    date: "15 October 2023",
  },
  {
    id: 5,
    title: "Worldwise Application",
    description: "test description number two",
    image: "/assets/projects/project3.png",
    githubLink:
      "https://github.com/SalmaanMushtaq/React-projects/tree/main/07-worldwise",
    date: "20 November 2023",
  },
  {
    id: 6,
    title: "Personal Portfolio",
    description: "test description number two",
    image: "/assets/projects/project3.png",
    githubLink: "https://github.com/SalmaanMushtaq/portfolio",
    date: "20 December 2023",
  },
];
const Works = () => {
  return (
    <>
      <Box
        sx={{
          margin: " 0px 20px",
          padding: "20px",
        }}
      >
        <h2>
          <PaletteIcon style={{ marginRight: "10px" }} /> My Projects
          <div className="customLine">
            <span className="insideCustomLine"></span>
          </div>
        </h2>
        <p
          style={{
            lineHeight: "1.5rem",
            textWrap: "wrap",
            textAlign: "justify",
            marginTop: "1rem",
          }}
        >
          &emsp; My portfolio highlights a collection of front-end projects,
          each designed with precision and creativity. These works showcase my
          expertise in crafting visually appealing and user-friendly interfaces.
          From responsive layouts to intuitive user interactions, my commitment
          to delivering top-notch front-end solutions is evident in every
          project.
        </p>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "58vh",
            marginTop: "2.5rem",
          }}
        >
          <Grid container spacing={3}>
            {worksData.map((work) => (
              <Grid item key={work.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardHeader
                    style={{
                      textAlign: "center",
                      backgroundColor: "#f5f5f5",
                      padding: "8px",
                    }}
                    title={
                      <Typography variant="h6" style={{ color: "#333" }}>
                        {work.title}
                      </Typography>
                    }
                    subheader={
                      <Typography variant="body2" style={{ color: "#666" }}>
                        {work.date}
                      </Typography>
                    }
                  />
                  <CardMedia
                    style={{ objectFit: "fill" }}
                    component="img"
                    height="140"
                    image={work.image}
                    alt={work.title}
                  />
                  <CardContent>
                    <Typography variant="body2">{work.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      href={work.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon style={{ marginRight: "4px" }} />
                      View on Github
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Works;
