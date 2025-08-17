import { Button, Menu, MenuItem, Portal } from "@chakra-ui/react";
import type { Platform } from "../hooks/usePlatforms";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformList = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data: { results = [] } = {}, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger
        asChild
        _focus={{ boxShadow: "none", outline: "none", bg: "none" }}
        _active={{ boxShadow: "none", outline: "none", bg: "none" }}
      >
        <Button variant="outline">
          {selectedPlatform?.name || "Platforms"}
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
                onClick={() => onSelectedPlatform(platform)}
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
