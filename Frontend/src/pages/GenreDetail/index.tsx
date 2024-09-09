import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import lists from "../../mocks/lists.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GenreDetail() {
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 6;

  const totalPages = Math.ceil(lists.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = lists.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event: unknown, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box
        sx={{
          border: "1px solid white",
          borderRadius: 2,
          backgroundColor: "rgba(0,0,0,0.5)",
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
          {currentItems.map((data, index) => (
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
                  <Button size="small" color="inherit" onClick={() => navigate('/anime/detail')}>
                    Click Here !
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            sx={{ mt: 2 }}
          />
        </Grid>
      </Box>
    </>
  );
}

export default GenreDetail;
