import React, { createContext, useState, useCallback } from "react";

type HeaderContextType = {
  username: string;
  getUsername?: (name: string) => void;
};

interface HeaderContextProps {
  children: React.ReactNode;
}

const InitialValue: HeaderContextType = {
  username: "",
};

export const HeaderContext = createContext<HeaderContextType>(InitialValue);

export const HeaderProvider = ({ children }: HeaderContextProps) => {
  const [username, setUsername] = useState(InitialValue.username);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUsername = (name: string) => {
    setUsername(name);
  };

  const contextValue = {
    username,
    getUsername: useCallback((username: string) => getUsername(username), [getUsername]),
  };
  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
