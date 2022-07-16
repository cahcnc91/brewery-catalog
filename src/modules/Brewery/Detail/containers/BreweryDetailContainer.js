import { CircularProgress, Alert, AlertTitle } from "@mui/material";
import useFetchData from "../../../common/hooks/useFetchData";
import { BREWERY_BASE_URL } from "../../consts";
import { useParams } from "react-router-dom";
import BreweryDetail from "../components/BreweryDetail";

const BreweryDetailContainer = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetchData(`${BREWERY_BASE_URL}/${id}`);

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
    return <BreweryDetail brewery={data} />;
  }
};

export default BreweryDetailContainer;
