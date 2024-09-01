import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import lists from "../../mocks/lists.json";

function GenreDetail() {
  return (
    <>
      <Box
        sx={{
          border: "1px solid white",
          borderRadius: 2,
          boxShadow: "16px 11px 15px 0px rgba(0,0,0,0.75);",
          m: 8,
          p: 2,
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Genre: Action</Typography>
        <Divider color="white" />
        <Grid
          container
          rowSpacing={3}
          sx={{ justifyContent: "center", alignItems: "center" }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={1}
          mb={1}
        >
          {lists.map((data, index) => (
            <Grid item xs={4} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  borderRadius: 2,
                  boxShadow: "16px 11px 15px 0px rgba(0,0,0,0.75);",
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={data.img}
                  title={data.name}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    color="white"
                    fontWeight="bold"
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="caption"
                    component="div"
                    color="white"
                  >
                    Genre: {data.categorie}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="caption"
                    component="div"
                    color="white"
                  >
                    Rating: {data.Rating}
                  </Typography>
                  <Divider color="white" />
                  <Box
                    sx={{
                      maxHeight: 120,
                      overflow: "auto",
                      mt: 2,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "white" }}>
                      {data.description}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small" color="inherit">
                    Click Here !
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default GenreDetail;
