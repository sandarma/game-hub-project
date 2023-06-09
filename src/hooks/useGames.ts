import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (
  gameQuery: GameQuery
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        // genres: selectedGenre?.id,
        // parent_platforms: selectedPlatform?.id,
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    // array of dependencies
    // [selectedGenre?.id, selectedPlatform?.id]
    [gameQuery]
  );

// moved below code to useData // changed to generic
// interface FetchGameResponse {
//   count: number;
//   results: Game[];
// }

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     // cancellations
//     const controller = new AbortController();

//     setLoading(true);

//     // for cancellation, added {signal: controller.signal} in second argument
//     apiClient
//       .get<FetchGameResponse>("/games", { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
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

//   return { games, error, isLoading };
// };

export default useGames;
