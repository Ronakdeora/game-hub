import { Button, Menu, MenuItem, Portal } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const PlatformList = () => {
  const { data: { results = [] } = {}, error } = usePlatforms();
  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger
        asChild
        _focus={{ boxShadow: "none", outline: "none", bg: "none" }}
        _active={{ boxShadow: "none", outline: "none", bg: "none" }}
      >
        <Button variant="outline">
          {results.find((p) => p.id === selectedPlatform)?.name || "Platforms"}
          <span style={{ marginLeft: "0.5rem", marginTop: "0.15rem" }}>
            <BsChevronDown />
          </span>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem">
            {results?.map((platform) => (
              <MenuItem
                value={platform.slug}
                key={platform.id}
                onClick={() => setPlatformId(platform.id)}
              >
                {platform.name}
              </MenuItem>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformList;
