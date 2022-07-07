import React from "react";
import Header from "../header";
import * as S from "./styled";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
