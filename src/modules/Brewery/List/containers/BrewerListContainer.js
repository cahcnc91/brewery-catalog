import { CircularProgress, Alert, AlertTitle } from "@mui/material";
import BreweryList from "../components/BreweryList";
import useFetchData from "../../../common/hooks/useFetchData";

const BreweryListContainer = () => {
  const { data, error, loading } = useFetchData("https://api.openbrewerydb.org/breweries");

  if (loading) return <CircularProgress />;

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>{error}</strong>
      </Alert>
    );
  }

  if (data) {
    return <BreweryList breweryList={data} />;
  }
};

export default BreweryListContainer;
