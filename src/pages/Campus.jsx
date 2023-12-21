import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import upgradeYourSkillSet from "../images/upgradeYourSkillSet.png";

const Campus = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "60px 100px",
        backgroundColor: "#FFFAFF",
        minHeight: "81vh",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "black",
          fontWeight: "700",
          marginBottom: "60px",
          textAlign: "center",
        }}
      >
        Campus Gallery
      </Typography>
      <Grid
        container
        rowSpacing={1}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"row-reverse"}
        columnSpacing={{ sm: 1, md: 3, xl: 4 }}
      >
        <Grid xs={12} md={4}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <img src={upgradeYourSkillSet} 
            style={{
              width: "100%",
              height: "100%",
              objectFit: 'cover',
              aspectRatio: "1/1",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "70px",
            }}
            alt="upgradeYourSkillSet" />
          </Box>
        </Grid>
        <Grid xs={12} md={4}>
        <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <img src={upgradeYourSkillSet} 
            style={{
              width: "100%",
              height: "100%",
              objectFit: 'cover',
              aspectRatio: "1/1",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "70px",
            }}
            alt="upgradeYourSkillSet" />
          </Box>
        </Grid>
        <Grid xs={12} md={4}>
        <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <img src={upgradeYourSkillSet} 
            style={{
              width: "100%",
              height: "100%",
              objectFit: 'cover',
              aspectRatio: "1/1",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "70px",
            }}
            alt="upgradeYourSkillSet" />
          </Box>
        </Grid>
        <Grid xs={12} md={4}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <img src={upgradeYourSkillSet} 
            style={{
              width: "100%",
              height: "100%",
              objectFit: 'cover',
              aspectRatio: "1/1",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "70px",
            }}
            alt="upgradeYourSkillSet" />
          </Box>
        </Grid>
        <Grid xs={12} md={4}>
        <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <img src={upgradeYourSkillSet} 
            style={{
              width: "100%",
              height: "100%",
              objectFit: 'cover',
              aspectRatio: "1/1",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "70px",
            }}
            alt="upgradeYourSkillSet" />
          </Box>
        </Grid>
        <Grid xs={12} md={4}>
        <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <img src={upgradeYourSkillSet} 
            style={{
              width: "100%",
              height: "100%",
              objectFit: 'cover',
              aspectRatio: "1/1",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "70px",
            }}
            alt="upgradeYourSkillSet" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Campus;
