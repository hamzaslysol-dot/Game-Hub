import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
import type { Game } from "./Hooks/UseGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const Gamecards = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default Gamecards;
