import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

import { CanceledError } from "axios";
import useData from "./useData";

import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");

// changed to static data instead of calling back end
// because data has hardly changes

const useGenres = () => ({ data: genres, isLoading: false, error: null });

// moved below code to useData // changed to generic
// interface FetchGenreResponse {
//   count: number;
//   results: Genre[];
// }

// const useGenres = () => {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     // cancellations
//     const controller = new AbortController();

//     setLoading(true);

//     // for cancellation, added {signal: controller.signal} in second argument
//     apiClient
//       .get<FetchGenreResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     // cancellations
//     return () => controller.abort();
//   }, []);

//   return { genres, error, isLoading };
// };

export default useGenres;
