import React from "react";
import * as S from "./styled";
import { ButtonProps } from "./@types/github.d";
import useHeader from "../../hook/header.hook";
import useGithub from "../../../../hooks/github.hooks";

const ButtonSearch: React.FC<ButtonProps> = ({ type, onClick }) => {
  return (
    <S.Button type={type} onClick={onClick}>
      <span>Buscar</span>
    </S.Button>
  );
};

export const Button = (): JSX.Element => {
  const { username } = useHeader();
  const { getUser } = useGithub();

  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (getUser !== undefined) getUser(username);
  };
  const button = ButtonSearch({
    type: "submit",
    onClick: buttonHandler,
  });
  return <>{button}</>;
};

export default Button;
