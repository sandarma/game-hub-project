import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

import { CanceledError, AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      // cancellations
      const controller = new AbortController();

      setLoading(true);

      // for cancellation, added {signal: controller.signal} in second argument
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      // cancellations
      return () => controller.abort();
    },
    deps ? [...deps] : []
  ); // first  time [] // deps - dependencies

  return { data, error, isLoading };
};

export default useData;
