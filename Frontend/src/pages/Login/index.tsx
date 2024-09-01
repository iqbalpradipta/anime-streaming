import {
  Container,
  Box,
  Typography,
  InputBase,
  Button,
  Link,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigation = useNavigate();

  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            border: "2px solid white",
            borderRadius: 2,
            boxShadow: "16px 11px 15px 0px rgba(0,0,0,0.75);",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            mt: 10,
            p: 5,
          }}
        >
          <Typography variant="h4">Login</Typography>
          <Box
            sx={{
              textAlign: "initial",
            }}
          >
            <Typography variant="body1">Email</Typography>
            <InputBase
              fullWidth
              sx={{
                mt: 1,
                flex: 1,
                color: "white",
                border: "1px solid white",
                borderRadius: 1,
                p: 1,
              }}
              placeholder="Email"
              type="email"
              inputProps={{ "aria-label": "Email" }}
            />
          </Box>
          <Box
            sx={{
              textAlign: "initial",
              mt: 3,
            }}
          >
            <Typography variant="body1">Password</Typography>
            <InputBase
              fullWidth
              sx={{
                mt: 1,
                flex: 1,
                color: "white",
                border: "1px solid white",
                borderRadius: 1,
                p: 1,
              }}
              placeholder="Password"
              type="password"
              inputProps={{ "aria-label": "Password" }}
            />
          </Box>
          <Box
            sx={{
              mt: 2,
              textAlign: "end",
            }}
          >
            <Link
              component="button"
              variant="subtitle1"
              color="inherit"
              underline="hover"
              sx={{}}
            >
              Forgot Password ?
            </Link>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                color: "white",
                border: "1px solid black",
                borderRadius: 3,
                "&:hover": {
                  backgroundColor: "#bf2307",
                  color: "white",
                },
                boxShadow: "9px 10px 36px 0px rgba(0,0,0,0.75);",
                width: "100%",
              }}
            >
              Login
            </Button>
          </Box>
          <Link
            component="button"
            color="inherit"
            underline="hover"
            sx={{
              mt: 3,
            }}
            onClick={() => navigation("/register")}
          >
            Don't Have an Account ? Register Here !
          </Link>
        </Box>
      </Container>
    </>
  );
}

export default Login;
