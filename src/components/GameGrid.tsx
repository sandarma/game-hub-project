import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";

// moved below codes to custom hook called useGames.ts
// interface Game {
//   id: number;
//   name: string;
// }

// interface FetchGameResponse {
//   count: number;
//   results: Game[];
// }

const GameGrid = () => {
  const { games, error } = useGames();

  // moved below codes to custom hook called useGames.ts
  //   const [games, setGames] = useState<Game[]>([]);
  //   const [error, setError] = useState("");

  //   useEffect(() => {
  //     apiClient
  //       .get<FetchGameResponse>("/xgames")
  //       .then((res) => setGames(res.data.results))
  //       .catch((err) => setError(err.message));
  //   }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
