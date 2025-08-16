import { Card, HStack, Skeleton } from "@chakra-ui/react";

const SkeletonCard = ({ skeletonItem }: { skeletonItem: number }) => {
  return (
    <Card.Root key={skeletonItem} overflow="hidden" borderRadius={5}>
      <Skeleton key={`image-${skeletonItem}`} height="200px" width="100%" />
      <Card.Body key={`body-${skeletonItem}`} gap="2">
        <Card.Title key={`title-${skeletonItem}`}>
          <Skeleton
            key={`title-skeleton-${skeletonItem}`}
            height="24px"
            width="70%"
            mb={2}
          />
          <HStack key={`hstack-${skeletonItem}`} justifyContent="space-between">
            <Skeleton key={`left-${skeletonItem}`} height="20px" width="40%" />
            <Skeleton
              key={`right-${skeletonItem}`}
              height="20px"
              width="40px"
            />
          </HStack>
        </Card.Title>
        <div key={`desc-${skeletonItem}`}>
          <Skeleton
            key={`desc-skeleton-${skeletonItem}`}
            height="16px"
            width="60%"
          />
        </div>
      </Card.Body>
    </Card.Root>
  );
};

export default SkeletonCard;
