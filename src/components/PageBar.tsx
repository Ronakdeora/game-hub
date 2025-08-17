import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import useGameQueryStore from "../store";

interface Props {
  count: number;
}

const PageBar = ({ count }: Props) => {
  const setPage = useGameQueryStore((s) => s.setPage);
  const setPageSize = useGameQueryStore((s) => s.setPageSize);

  const onPageChange = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  };
  return (
    <Pagination.Root
      count={count}
      pageSize={15}
      defaultPage={1}
      onPageChange={(page) => onPageChange?.(page.page, 15)}
    >
      <ButtonGroup variant="outline" size="sm">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton variant={{ base: "outline", _selected: "solid" }}>
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  );
};

export default PageBar;
