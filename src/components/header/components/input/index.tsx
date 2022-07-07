import React from "react";
import * as S from "./styled";
import { InputProps } from "./@types/github.d";
import useHeader from "../../hook/header.hook";

const InputSearch: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></S.Input>
  );
};

export const Input = () => {
  const { username, getUsername } = useHeader();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getUsername !== undefined) {
      getUsername(e.target.value);
    }
  };
  const input = InputSearch({
    type: "text",
    placeholder: "Digite o username para pesquisa...",
    value: username,
    onChange: inputHandler,
  });
  return <>{input}</>;
};

export default Input;
