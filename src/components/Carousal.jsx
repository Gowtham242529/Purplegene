import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pythonFullStack from "../images/pythonFullStack.png";
import fullStackAI from "../images/fullStackAI.png";
import mobileStack from "../images/mobileStack.png";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Carousal = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Container = [
    {
      image: pythonFullStack,
      title: "Python Full Stack",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur suscipit, ab dicta doloremque accusamus itaque libero rerum accusantium quam! Optio assumenda dolorem neque ab corporis nesciunt, dolore sint possimus reprehenderit",
    },
    {
      image: fullStackAI,
      title: "Full Stack AI",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur suscipit, ab dicta doloremque accusamus itaque libero rerum accusantium quam! Optio assumenda dolorem neque ab corporis nesciunt, dolore sint possimus reprehenderit",
    },
    {
      image: mobileStack,
      title: "Mobile Stack",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur suscipit, ab dicta doloremque accusamus itaque libero rerum accusantium quam! Optio assumenda dolorem neque ab corporis nesciunt, dolore sint possimus reprehenderit",
    },
    {
      image: pythonFullStack,
      title: "Python Full Stack",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur suscipit, ab dicta doloremque accusamus itaque libero rerum accusantium quam! Optio assumenda dolorem neque ab corporis nesciunt, dolore sint possimus reprehenderit",
    },
    {
      image: fullStackAI,
      title: "Full Stack AI",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur suscipit, ab dicta doloremque accusamus itaque libero rerum accusantium quam! Optio assumenda dolorem neque ab corporis nesciunt, dolore sint possimus reprehenderit",
    },
    {
      image: mobileStack,
      title: "Mobile Stack",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur suscipit, ab dicta doloremque accusamus itaque libero rerum accusantium quam! Optio assumenda dolorem neque ab corporis nesciunt, dolore sint possimus reprehenderit",
    },
  ];

  return (
    <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} arrows={false}>
      {Container.map((card, index) => (
        <Box
          key={index}
          sx={{
            height:'100%',
            margin: '0 35px',
            borderRadius : '14px',
            boxShadow : '0 2px 2px 2px #4176CD'
          }}
        >
          <img src={card.image}
           style={{
             width: "100%",
             objectFit: 'contain',
             borderRadius: '14px 14px 0 0',
           }} 
           alt={`Image ${index + 1}`} />
          <Typography 
            variant="h5"
            sx={{
              padding: "10px 20px 0",
            }}
          >{card.title}</Typography>
          <Typography
            variant="body1"
            sx={{
              padding: "0 20px 10px",
            }}
          >{card.description}</Typography>
        </Box>
      ))}
    </Carousel>
  );
};

export default Carousal;
