import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(url);
        setLoading(false);
        setData(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, [url]);

  return { error, loading, data };
};

export default useFetchData;
