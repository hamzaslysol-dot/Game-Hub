import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./Hooks/UseGames";
import Gamecards from "./Gamecards";
import GameCardsSkeleton from "./GameCardsSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        gap={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardsSkeleton key={skeleton} />)}
        {games.map((game) => (
          <Gamecards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
