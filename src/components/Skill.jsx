/* eslint-disable react/prop-types */
import { Card, CardContent, Grid, Rating, Typography } from "@mui/material";

const Skill = ({ skills, animationComplete }) => {
  return (
    <Grid
      container
      spacing={1}
      margin={2}
      className="container"
      alignItems="flex-start"
    >
      <Grid item xs={12} md={12}>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={6} key={index}>
              <Card
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "20px",
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {skill.name}{" "}
                    <span style={{ float: "right" }}>
                      {animationComplete ? `${skill.proficiency}` : ""}
                    </span>
                  </Typography>
                  <Rating
                    name="read-only"
                    value={animationComplete ? skill.points : 0}
                    readOnly
                    max={10}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skill;
