import React, { useState } from "react";
import {
  Box,
  ListItem,
  ListItemButton,
  Divider,
  List,
  Typography,
  Grid,
  Pagination,
} from "@mui/material";
import ButtonWatch from "../button";
import populer from "../../mocks/populer.json";

function Ongoing() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(populer.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = populer.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event: unknown, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box
        gap={5}
        sx={{
          border: "1px solid white",
          display: "flex",
          alignItems: "center",
          padding: "14px 16px",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: 2,
          boxShadow: '16px 11px 15px 0px rgba(0,0,0,0.75);',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
      >
        <List
          sx={{
            p: 0,
            width: "100%",
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
          }}
          aria-label="ongoing anime"
        >
          {currentItems.map((data, index) => (
            <React.Fragment key={index}>
              <ListItem component="div" disablePadding>
                <ListItemButton>
                  <Box
                    component="img"
                    alt={data.judul}
                    src={data.image}
                    sx={{
                      width: 150,
                      height: 225,
                    }}
                  />
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    marginLeft={5}
                    spacing={1}
                    gap={2}
                  >
                    <Typography variant="h4" fontWeight="bold">
                      {data.judul}
                    </Typography>
                    <Typography variant="h6">
                      Genre: Action, Drama, Shounen
                    </Typography>
                    <Box>
                      <ButtonWatch />
                    </Box>
                  </Grid>
                </ListItemButton>
              </ListItem>
              <Divider sx={{ backgroundColor: "#ffff" }} />
            </React.Fragment>
          ))}
        </List>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          sx={{ mt: 2 }}
        />
      </Box>
    </>
  );
}

export default Ongoing;