import { Menu, Button, Portal, MenuItem } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

export interface Sort {
  id: number;
  name: string;
  slug: string;
}

const SortSelector = () => {
  const sort = useGameQueryStore((s) => s.gameQuery.sort);
  const setSort = useGameQueryStore((s) => s.setSort);

  const data: Sort[] = [
    { id: 1, name: "Name", slug: "name" },
    { id: 2, name: "Released", slug: "released" },
    { id: 3, name: "Added", slug: "-added" },
    { id: 4, name: "Created", slug: "-created" },
    { id: 5, name: "Updated", slug: "-updated" },
    { id: 6, name: "Rating", slug: "-rating" },
    { id: 7, name: "Metacritic", slug: "-metacritic" },
  ];
  return (
    <Menu.Root>
      <Menu.Trigger
        asChild
        _focus={{ boxShadow: "none", outline: "none", bg: "none" }}
        _active={{ boxShadow: "none", outline: "none", bg: "none" }}
      >
        <Button variant="outline">
          Order By : {data.find((s) => s.slug === sort)?.name || "Relevance"}
          <span style={{ marginLeft: "0.5rem", marginTop: "0.15rem" }}>
            <BsChevronDown />
          </span>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem">
            {data.map((sort) => (
              <MenuItem
                value={sort.slug}
                key={sort.id}
                onClick={() => setSort(sort.slug)}
              >
                {sort.name}
              </MenuItem>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
