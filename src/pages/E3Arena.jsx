import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import upgradeYourSkillSet from "../images/upgradeYourSkillSet.png";
import individualAttention from "../images/individualAttention.png";
import placementAssistance from "../images/placementAssistance.png";
import Lamp from "../images/lamp.png";
import '../index.css'

const E3Arena = () => {
  const button ={
    textTransform: 'uppercase !important',
  }
  return (
    <Box
      sx={{
        width: "100%",
        padding: "60px 100px",
        backgroundColor: "#FFFAFF",
        minHeight: "81vh",
        position: "relative",
      }}
    >
      <img
        src={Lamp}
        style={{
          position: "absolute",
          right: "0",
          top: "30px",
          zIndex: "1",
          width: "30vw",
          height: '40vh',
        }}
        alt=""
      />
      <Typography
        variant="h3"
        sx={{
          color: "black",
          fontWeight: "600",
          marginBottom: "60px",
          textAlign: "center",
        }}
      >
        Invest in Knowledge
        <span
          style={{
            color: "#673091",
          }}
        >
          , Invest in Yourself
        </span>
      </Typography>
      <Grid
        container
        rowSpacing={1}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"row-reverse"}
        columnSpacing={{ sm: 1, md: 2, xl: 2 }}
      >
        <Grid xs={12} md={7}>
          <Typography
            variant="h4"
            sx={{
              color: "black",
              fontWeight: "600",
              marginBottom: "32px",
              textAlign: "center",
              lineHeight: "1.5",
            }}
          >
            Upgrade your skillset
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "black",
              textAlign: "center",
            }}
          >
            Secure a prosperous future through <br /> practical training and the
            acquisition of <br /> high-demand skill sets.
          </Typography>
        </Grid>
        <Grid xs={12} md={5}>
          <img
            src={upgradeYourSkillSet}
            alt=""
            style={{
              width: "400px",
              height: "400px",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        alignItems={"center"}
        justifyContent={"center"}
        columnSpacing={{ sm: 1, md: 2, xl: 2 }}
      >
        <Grid xs={12} md={7}>
          <Typography
            variant="h4"
            sx={{
              color: "black",
              fontWeight: "600",
              marginBottom: "32px",
              textAlign: "center",
              lineHeight: "1.5",
            }}
          >
            Individual Attention
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "black",
              textAlign: "center",
            }}
          >
            Experience the advantages of <br />
            one-on-one mentorship during <br /> your educational path.
          </Typography>
        </Grid>
        <Grid xs={12} md={5}>
          <img
            src={individualAttention}
            alt=""
            style={{
              width: "400px",
              height: "400px",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"row-reverse"}
        columnSpacing={{ sm: 1, md: 2, xl: 2 }}
      >
        <Grid xs={12} md={7}>
          <Typography
            variant="h4"
            sx={{
              color: "black",
              fontWeight: "600",
              marginBottom: "32px",
              textAlign: "center",
              lineHeight: "1.5",
            }}
          >
            Placement Assistance
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "black",
              textAlign: "center",
            }}
          >
            Access our job placement support system, <br /> which connects you
            with our network of industry partners.
          </Typography>
        </Grid>
        <Grid xs={12} md={5}>
          <img
            src={placementAssistance}
            alt=""
            style={{
              width: "400px",
              height: "400px",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        alignItems={"center"}
        justifyContent={"center"}
        columnSpacing={{ sm: 1, md: 2, xl: 2 }}
      >
        <Grid xs={6} md={6}>
          <Button
            id="button"
            sx={{
              color: "white",
              fontWeight: "900",
              backgroundImage: "linear-gradient(to right, #8759E3, #71B8DC)",
              padding: "20px 155px",
              border: "1px solid white",
              borderRadius: "28px",
              maxWidth: "620px",
            }}
          >
            Kickstart your Journey with us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default E3Arena;
