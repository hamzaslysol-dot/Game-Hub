import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./Hooks/UseGames";
import Gamecards from "./Gamecards";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        gap={10}
      >
        {games.map((game) => (
          <Gamecards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
