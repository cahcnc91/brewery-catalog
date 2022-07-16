import BreweryListContainer from '../../modules/Brewery/List/containers/BrewerListContainer';
import { Grid, Typography } from '@mui/material';

export default function BreweryList() {
  return (
    <main>
      <Grid container flexDirection="column" alignItems="center">
        <Typography variant='h2'>Brewery Catalog</Typography>
        <BreweryListContainer />
      </Grid>
    </main>
  );
}
