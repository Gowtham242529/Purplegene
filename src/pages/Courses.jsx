import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Carousal from "../components/Carousal";

const Courses = () => {
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
        variant="h4"
        sx={{
          color: "black",
          fontWeight: "600",
          marginLeft : '40px',
          textAlign: "left",
        }}
      >
        {/* <span
          style={{
            color: "#6285C7",
          }}
        >
          "
        </span> */}
        Our Most <span
          style={{
            color: "#673091",
          }}
        >
          Popular Training
        </span>
        {/* <span
          style={{
            color: "#6285C7",
          }}
        >
          "
        </span> */}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#7C7FAA",
          fontWeight: "300",
          marginBottom: "60px",
          marginLeft: '40px',
          textAlign: "left",
        }}
      >
        Let's Join our best classes with our Famous instructors
      </Typography>
      <Carousal/>
    </Box>
  );
};

export default Courses;
