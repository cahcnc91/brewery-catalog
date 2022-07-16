import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import beer from "../../../../images/beer.png";
import { Link } from "react-router-dom";

const BreweryListItem = ({ brewery }) => {
  return (
    <Link to={`/breweries/${brewery.id}`}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="Beer" src={beer} sx={{ width: 35, height: 45 }} variant="square" />
        </ListItemAvatar>
        <div style={{ paddingLeft: "1rem" }}>
          <ListItemText
            primary={brewery.name}
            secondary={
              <Typography component="span" variant="body2" color="text.primary">
                <b>{brewery.city}</b> - {brewery.state}
              </Typography>
            }
          />
        </div>
      </ListItem>
      <Divider variant="inset" component="li" />
    </Link>
  );
};

export default BreweryListItem;
