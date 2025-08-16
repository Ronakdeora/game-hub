import { HStack, Image } from "@chakra-ui/react";
import type { Platform } from "../hooks/usePlatforms";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

const PlatForms = ({ platforms }: Props) => {
  // index signature
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation5: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack justifyContent="start" gap={1}>
      {platforms.map((platform) => (
        <Image key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatForms;
