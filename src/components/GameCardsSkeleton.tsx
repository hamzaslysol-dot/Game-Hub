import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardsSkeleton = () => {
  return (
    <Card width="400px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
export default GameCardsSkeleton;
