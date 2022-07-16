import { List, listItemClasses } from "@mui/material";
import BreweryListItem from "./BreweryListItem";

const BreweryList = ({ breweryList }) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 600,
        bgcolor: "background.paper",
        [`& .active, & .${listItemClasses.root}:hover`]: {
          color: "red",
          fontWeight: "bold",
          backgroundColor: "#F0F0F0",
        },
      }}
    >
      {breweryList.map((brewery) => (
        <BreweryListItem brewery={brewery} key={brewery.id} />
      ))}
    </List>
  );
};

export default BreweryList;
