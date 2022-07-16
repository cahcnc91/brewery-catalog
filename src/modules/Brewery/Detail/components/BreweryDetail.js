import { Grid, Typography, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const BreweryDetail = ({ brewery }) => {
  return (
    <Grid>
      <Typography variant="h1" padding={".5rem"}>
        {brewery.name}
      </Typography>
      <Grid container flexDirection={"row"} alignItems="center">
        <LocationOnIcon />
        <Typography variant="body1" padding={".5rem"}>
          <b>Location: </b>
          {brewery.city}, {brewery.state} - {brewery.country}
        </Typography>
      </Grid>

      <Grid container flexDirection={"row"} alignItems="center">
        <LocalPhoneIcon />
        <Typography variant="body1" padding={".5rem"}>
          <b>Phone:</b> {brewery.phone ? brewery.phone : "--"}
        </Typography>
      </Grid>

      {brewery.website_url && (
        <Link padding={"1rem .5rem"} href={brewery.website_url}>
          See website
        </Link>
      )}
    </Grid>
  );
};

export default BreweryDetail;
