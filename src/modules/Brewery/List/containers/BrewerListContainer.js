import useFetchData from "../../../common/hooks/useFetchData";

const BreweryListContainer = () => {
  const { data, error, loading } = useFetchData("https://api.openbrewerydb.org/breweries");
  console.log(data);
};

export default BreweryListContainer;
