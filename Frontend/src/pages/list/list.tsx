import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  IconButton,
  InputBase,
} from "@mui/material";
import { IoMdSearch } from "react-icons/io";
import lists from "../../mocks/lists.json";

function Lists() {
  return (
    <>
      <Box
        sx={{
          padding: 5,
          margin: "20px auto",
          maxWidth: 1100,
          backgroundColor: "rgba(0,0,0,0.5)",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Movie List
        </Typography>

        <Box
          sx={{
            border: "1px solid gray",
            borderRadius: 4,
            backgroundColor: "rgba(109, 98, 98, 0.6)",
            backgroundBlendMode: "lighten",
          }}
        >
          <IconButton sx={{ p: "10px" }}>
            <IoMdSearch />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: "white" }}
            placeholder="Search..."
            inputProps={{ "aria-label": "Search..." }}
          />
        </Box>
        <Divider sx={{ backgroundColor: "white", mt: 2 }} />
        <List sx={{ mt: 2 }}>
          {lists.map((data, index) => (
            <ListItem>
              <ListItemText>{data.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}

export default Lists;
