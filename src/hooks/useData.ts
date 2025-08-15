import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface DataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const cancel = new AbortController();
    apiClient
      .get<DataResponse<T>>(endpoint, { signal: cancel.signal })
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        if (error.name === "CanceledError") return;
        setError(error);
      });
    return () => cancel.abort();
  }, [endpoint]);

  return { data, error };
};

export default useData;
