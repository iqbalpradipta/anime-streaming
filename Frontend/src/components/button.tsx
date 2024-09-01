import { Button } from "@mui/material";

function ButtonWatch() {
  return (
    <>
      <Button
        color="inherit"
        variant="outlined"
        sx={{
          backgroundColor: "red",
          color: "white",
          border: "1px solid black",
          "&:hover": {
            border: "1px solid white",
            backgroundColor: "black",
            color: "white",
          },
          boxShadow: "16px 11px 15px 0px rgba(0,0,0,0.75);",
        }}
      >
        Watch Now !
      </Button>
    </>
  );
}

export default ButtonWatch;
