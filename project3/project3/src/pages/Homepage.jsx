import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import BrushIcon from "@mui/icons-material/Brush";

function Homepage() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          justifyContent={"center"}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box maxWidth={500}>
            <h2 style={{ textAlign: "center" }}>Welcome, my name is Omar.</h2>
            <p style={{ textAlign: "center" }}>
              I have a passion for art and design, specializing in graphic
              design, UX/UI design, web development, and illustration. Whether
              I'm crafting captivating user experiences or diving into the world
              of digital arts, I'm always seeking to fuse technology and
              creativity. As a graphic design enthusiast and computer science
              student, I'm on a constant journey of learning, exploring, and
              pushing the boundaries of visual expression.
            </p>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card sx={{ maxWidth: 345, minHeight: 280 }}>
            <CardContent>
              <DesignServicesIcon sx={{ fontSize: 100 }} />
              <Typography gutterBottom variant="h5" component="div">
                Graphic Design
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I excel in graphic design, using tools like Photoshop, Figma,
                and Canva to create visually stunning, professional, and
                effective designs that communicate messages clearly.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card sx={{ maxWidth: 345, minHeight: 280 }}>
            <CardContent>
              <ArchitectureIcon sx={{ fontSize: 100 }} />
              <Typography gutterBottom variant="h5" component="div">
                UX/UI Design
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I excel in UX/UI design, crafting intuitive and visually
                appealing user experiences that seamlessly blend functionality
                and aesthetics using tools like Figma and Adobe XD.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card sx={{ maxWidth: 345, minHeight: 280 }}>
            <CardContent>
              <IntegrationInstructionsIcon sx={{ fontSize: 100 }} />
              <Typography gutterBottom variant="h5" component="div">
                Web Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I excel in web development, building responsive, user-friendly
                websites that combine functionality and design using HTML, CSS,
                JavaScript, React, Jquery, AJAX and more.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card sx={{ maxWidth: 345, minHeight: 280 }}>
            <CardContent>
              <BrushIcon sx={{ fontSize: 100 }} />
              <Typography gutterBottom variant="h5" component="div">
                Illustration
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I excel in illustration, creating detailed and expressive
                artwork that brings ideas to life using both traditional and
                digital mediums (Adobe Photoshop, Procreate, Krita, etc.).
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Homepage;
