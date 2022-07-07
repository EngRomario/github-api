import React from "react";
import Button from "./components/button";
import Input from "./components/input";
import * as S from "./styled";
import HeaderProvider from "./provider/header.provider";

const Header = (): JSX.Element => {
  return (
    <header>
      <S.Wrapper>
        <HeaderProvider>
          <Input />
          <Button />
        </HeaderProvider>
      </S.Wrapper>
    </header>
  );
};

export default Header;
