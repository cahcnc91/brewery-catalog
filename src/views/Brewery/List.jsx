import BreweryListContainer from '../../modules/Brewery/List/containers/BrewerListContainer';
import { Grid, Typography } from '@mui/material';

export default function BreweryList() {
  return (
    <main>
      {/* <form>
        <input type='text' name='search' placeholder='Find a brewery' />
        <button type='submit'>Search</button>
        <button type='reset'>Reset</button>
      </form>
      <ul>
        <li>
          <Link to='/breweries/1'>Brewery 1</Link> - Brewtown, OR
        </li>
      </ul> */}
      <Grid container flexDirection="column" alignItems="center">
        <Typography variant='h2'>Brewery Catalog</Typography>
        <BreweryListContainer />
      </Grid>
    </main>
  );
}
