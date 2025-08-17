import apiClient from "../services/api-client";
import type { AxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";

interface DataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  queryKey: unknown[],
  requestedConfig?: AxiosRequestConfig
) =>
  useQuery<{ results: T[]; count: number }, Error>({
    queryKey,
    queryFn: async () => {
      const res = await apiClient.get<DataResponse<T>>(
        endpoint,
        requestedConfig
      );
      return { results: res.data.results, count: res.data.count };
    },
  });

export default useData;
