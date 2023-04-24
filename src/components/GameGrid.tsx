import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

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
  const { games, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6];

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
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
