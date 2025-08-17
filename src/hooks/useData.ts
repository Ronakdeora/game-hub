import type { AxiosRequestConfig } from "axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useData = <T>(
  endpoint: string,
  queryKey: unknown[],
  requestedConfig?: AxiosRequestConfig
) => {
  const apiClient = new APIClient<T>(endpoint);

  return useQuery<{ results: T[]; count: number }, Error>({
    queryKey,
    queryFn: () => apiClient.getAll(requestedConfig).then((res) => res.data),
    staleTime: 1000 * 60 * 5, // 2 minutes
    placeholderData: keepPreviousData,
  });
};

export default useData;
