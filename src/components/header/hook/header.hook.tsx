import { useContext } from "react";
import { HeaderContext } from "../provider/header.provider";

export const useHeader = () => {
  const { username, getUsername } = useContext(HeaderContext);
  return { username, getUsername };
};

export default useHeader;
