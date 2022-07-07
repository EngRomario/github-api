import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "submit";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
