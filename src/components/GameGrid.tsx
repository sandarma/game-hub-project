import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
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

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

const GameGrid = ({
  // selectedGenre,
  // selectedPlatform,
  gameQuery,
}: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(
    // selectedGenre, selectedPlatform
    gameQuery
  );

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

  if (error) return <Text>{error}</Text>;

  return (
    <>
      {/* {error && <Text>{error}</Text>} */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"10px"}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
