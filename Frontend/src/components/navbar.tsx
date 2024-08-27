import { Box, Button, Grid, Link, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigation = useNavigate()
  return (
    <>
      <Box
        sx={{
          border: "2px solid white",
          padding: "14px 16px",
        }}
      >
        <Grid container spacing={3} direction="row" alignItems="center">
          <Grid item xs={4}>
            <Link
              underline="none"
              color="inherit"
              href="#"
              sx={{
                p: "40px",
                fontSize: "160%",
                fontFamily: "Bebas Neue",
                color: "red",
              }}
            >
              Balflix
            </Link>
          </Grid>
          <Grid item>
            <Link component="button" underline="none" color="inherit" onClick={() => navigation('/')} >
              Home
            </Link>
          </Grid>
          <Grid item>
            <Link component="button" underline="none" color="inherit" onClick={() => navigation('/genre')}>
              Genre
            </Link>
          </Grid>
          <Grid item>
            <Link component="button" underline="none" color="inherit" onClick={() => navigation('/list')}>
              List
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link component="button" underline="none" color="inherit" onClick={() => navigation('/about')}>
              About
            </Link>
          </Grid>
          <Grid item>
            <Button
              href="#"
              variant="outlined"
              sx={{
                backgroundColor: "black",
                color: "white",
                border: "1px solid white",
                "&:hover": {
                  backgroundColor: "#ededed",
                  color: "black",
                },
              }}
            >
              Register
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="#"
              variant="contained"
              sx={{
                backgroundColor: "red",
                color: "white",
                border: "1px solid black",
                "&:hover": {
                  backgroundColor: "#bf2307",
                  color: "black",
                },
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Navbar;
