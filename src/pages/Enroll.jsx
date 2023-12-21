import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import { Typography } from '@mui/material';

export default function Enroll() {
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    phone: '',
  });
  return (
    <Box
      id='enrollSection'
      sx={{padding: "60px 100px", backgroundColor: '#FFFAFF'}}
    >
      <Grid container rowSpacing={1} alignItems={'end'} columnSpacing={{ sm: 1, md: 3, xl: 4 }}>
          <Grid xs={12} md={2}>
          <Typography
            variant="h4"
            sx={{
              color: "#6285C7",
              fontWeight: "600",
              paddingLeft: '5px',
            }}
          >
            Name
          </Typography>
          <input type="text" style={{
            width: "100%",
            height: "40px",
            outline: 'none',
            borderRadius: '5px',
            padding: '25px 15px',
            fontSize: '20px',
            border: '1px solid #00000029',
            boxShadow : '0px 3px 6px #00000029',
          }}
          onChange={e => setUser({ ...user, name: e.target.value })} 
           />
          </Grid>
          <Grid xs={12} md={4}>
          <Typography
            variant="h4"
            sx={{
              color: "#6285C7",
              fontWeight: "600",
              paddingLeft: '5px',
            }}
          >
            E-mail
          </Typography>
          <input type="text" style={{
            width: "100%",
            height: "40px",
            outline: 'none',
            borderRadius: '5px',
            padding: '25px 15px',
            fontSize: '20px',
            border: '1px solid #00000029',
            boxShadow : '0px 3px 6px #00000029',
          }}
          onChange={e => setUser({ ...user, email: e.target.value })}
          />
          </Grid>
          <Grid xs={12} md={4}>
          <Typography
            variant="h4"
            sx={{
              color: "#6285C7",
              fontWeight: "600",
              paddingLeft: '5px',
            }}
          >
            Phone
          </Typography>
          <input type="text" style={{
            width: "100%",
            height: "40px",
            outline: 'none',
            borderRadius: '5px',
            padding: '25px 15px',
            fontSize: '20px',
            border: '1px solid #00000029',
            boxShadow : '0px 3px 6px #00000029',
          }} 
          onChange={e => setUser({ ...user, phone: e.target.value })}
          />
          </Grid>
          <Grid xs={12} md={2}>
          <Button
                sx={{
                  color: "white",
                  fontWeight: "600",
                  backgroundImage: "linear-gradient(to right, #8759E3, #71B8DC)",
                  padding: "8px 25px",
                  border: "1px solid white",
                  borderRadius: "5px",
                  textTransform: 'capitalize',
                  letterSpacing : '2px',
                  fontSize: '22px'
                }}
              >
                Submit
          </Button>
          </Grid>
        </Grid>
    </Box>
  );
}