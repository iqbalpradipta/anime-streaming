import { Box, Button, Grid, Link } from "@mui/material";
import genre from "../../mocks/genre.json";

function Genre() {
  return (
    <>
      <Box
        sx={{
          border: "1px solid white",
          p: 5,
          mt: 2,
          width: "100%",
          height: "100%",
        }}
      >
        <Grid
          container
          columns={{ xs: 5, sm: 5, md: 5 }}
          direction="row"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          {genre.map((data, index) => (
            <Grid item xs={1} sm={1} md={1} key={index}>
              <Button
                color="inherit"
                sx={{
                  border: "1px solid white",
                  width: "60%", 
                  height: "30%",
                  mt: 5,
                  backgroundColor: "transparent",
                }}
              >
                {data.genre}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Genre;
