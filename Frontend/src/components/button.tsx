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
        }}
      >
        Watch Now !
      </Button>
    </>
  );
}

export default ButtonWatch;
