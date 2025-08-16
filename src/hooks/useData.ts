/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import type { AxiosRequestConfig } from "axios";

interface DataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestedParam?: AxiosRequestConfig,
  dep?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const cancel = new AbortController();
      setIsLoading(true);
      apiClient
        .get<DataResponse<T>>(endpoint, {
          ...requestedParam,
          signal: cancel.signal,
        })
        .then((response) => {
          setData(response.data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error.name === "CanceledError") return;
          setError(error);
          setIsLoading(false);
        });
      return () => cancel.abort();
    },
    dep ? dep : []
  );

  return { data, error, isLoading };
};

export default useData;
