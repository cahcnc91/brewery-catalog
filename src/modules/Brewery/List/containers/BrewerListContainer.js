import { CircularProgress, Alert, AlertTitle } from "@mui/material";
import BreweryList from "../components/BreweryList";
import useFetchData from "../../../common/hooks/useFetchData";
import { Fragment } from "react";
import BreweryListSearch from "../components/BreweryListSearch";
import { BREWERY_BASE_URL } from "../../consts";

const BreweryListContainer = () => {
  const { data, error, loading, setUrl } = useFetchData(`${BREWERY_BASE_URL}?per_page=10`);

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
    return (
      <Fragment>
        <BreweryListSearch setUrl={setUrl} />
        <BreweryList breweryList={data} />;
      </Fragment>
    );
  }
};

export default BreweryListContainer;
