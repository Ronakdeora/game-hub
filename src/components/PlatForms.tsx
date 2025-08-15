import { HStack, Image } from "@chakra-ui/react";
import type { PlatForm } from "../hooks/useGames";
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
  platforms: PlatForm[];
}

const PlatForms = ({ platforms }: Props) => {
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
    <HStack>
      {platforms.map((platform) => (
        <Image key={platform.id} as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatForms;
