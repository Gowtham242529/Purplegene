import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import homeImage from "../images/homeImage.png";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {

  return (
      <Box
        sx={{
          width: "100%",
          backgroundImage: "linear-gradient(115deg, #41067D, #127F76)",
          minHeight: "81vh",
          padding: "120px 100px",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ sm: 1, md: 2, xl: 2 }}>
          <Grid xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: "600",
                marginBottom: "60px",
              }}
            >
              FullStack AI Developer <br /> Training with <br /> Job Interview
            </Typography>
            <Typography
              sx={{
                color: "white",
                marginBottom: "60px",
              }}
            >
              Learn any coding program in distance and for a reasonable fee.{" "}
              <br />
              You don't have to struggle alone, you've got our assistance and
              help.
            </Typography>
            <Link to="#enrollSection">
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "transparent",
                  padding: "15px 30px",
                  border: "1px solid white",
                  borderRadius: "5px",
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                Enroll Now
              </Button>
            </Link>
          </Grid>
          <Grid xs={12} md={6}>
            <img
              src={homeImage}
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Box>
  );
};

export default Home;
