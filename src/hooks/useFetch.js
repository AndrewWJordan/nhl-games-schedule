import { useState, useEffect, useCallback } from "react";

export default function useFetch(getMethod, initialValue = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(false);

  const getData = useCallback(() => {
    setIsLoading(true);
    return getMethod()
      .then(({ data }) => setData(data))
      .catch((error) => {
        console.error(error.message);
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, [getMethod]);

  useEffect(() => {
    getData();
  }, [getData]);

  const makeRequest = (requestFunc) => {
    setIsLoading(true);
    requestFunc()
      .then(({ data }) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  return { isLoading, data, error, getData, makeRequest };
}
