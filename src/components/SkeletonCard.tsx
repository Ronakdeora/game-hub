import { Card, HStack, Skeleton } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Card.Root overflow="hidden" borderRadius={5}>
      <Skeleton height="200px" width="100%" />
      <Card.Body gap="2">
        <Card.Title>
          <Skeleton height="24px" width="70%" mb={2} />
          <HStack justifyContent="space-between">
            <Skeleton height="20px" width="40%" />
            <Skeleton height="20px" width="40px" />
          </HStack>
        </Card.Title>
        <Card.Description>
          <Skeleton height="16px" width="60%" />
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default SkeletonCard;
