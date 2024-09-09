import { Box, Button, Grid, Link, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigation = useNavigate();
  return (
    <>
      <Box
        sx={{
          border: "2px solid white",
          borderRadius: 2,
          boxShadow: "16px 11px 15px 0px rgba(0,0,0,0.75);",
          padding: "14px 16px",
          backgroundColor: 'rgba(0,0,0,0.5)'
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
              onClick={() => navigation("/")}
            >
              Balflix
            </Link>
          </Grid>
          <Grid item>
            <Link
              component="button"
              underline="none"
              color="inherit"
              onClick={() => navigation("/")}
            >
              Home
            </Link>
          </Grid>
          <Grid item>
            <Link
              component="button"
              underline="none"
              color="inherit"
              onClick={() => navigation("/genre")}
            >
              Genre
            </Link>
          </Grid>
          <Grid item>
            <Link
              component="button"
              underline="none"
              color="inherit"
              onClick={() => navigation("/list")}
            >
              List
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link
              component="button"
              underline="none"
              color="inherit"
              onClick={() => navigation("/about")}
            >
              About
            </Link>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "black",
                color: "white",
                border: "1px solid black",
                "&:hover": {
                  backgroundColor: "#ededed",
                  border: "1px solid black",
                  color: "black",
                },
                boxShadow: "9px 10px 36px 0px rgba(0,0,0,0.75);",
              }}
              onClick={() => navigation("/register")}
            >
              Register
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                color: "white",
                border: "1px solid black",
                "&:hover": {
                  backgroundColor: "#bf2307",
                  color: "black",
                },
                boxShadow: "9px 10px 36px 0px rgba(0,0,0,0.75);",
              }}
              onClick={() => navigation("/login")}
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
