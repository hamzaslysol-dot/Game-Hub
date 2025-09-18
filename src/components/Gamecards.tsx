import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
import type { Game } from "./Hooks/UseGames";

interface Props {
  game: Game;
}
const Gamecards = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default Gamecards;
