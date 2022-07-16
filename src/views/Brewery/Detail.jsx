import { Link } from 'react-router-dom';
import BreweryDetailContainer from '../../modules/Brewery/Detail/containers/BreweryDetailContainer';
import {Grid} from "@mui/material";

export default function BreweryDetail() {
  return (
    <main>
        <Grid container flexDirection="column" alignItems="center" padding={"2rem"}>      
        <BreweryDetailContainer/>
         <Link to='/breweries'>Back to Breweries</Link>
      </Grid>

    </main>
  );
}
