import { List } from "@mui/material";
import BreweryListItem from "./BreweryListItem";

const BreweryList = ({ breweryList }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
      {breweryList.map((brewery) => (
        <BreweryListItem brewery={brewery} key={brewery.id} />
      ))}
    </List>
  );
};

export default BreweryList;
