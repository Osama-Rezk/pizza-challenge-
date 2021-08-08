import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
  onClickHandler?: (event: any) => void;
}

export const Button = (props: ButtonProps) => {
  const { onClickHandler = () => {}, disabled = false, label, ...rest } = props;

  return (
    <StyledButton
      onClick={(event) => onClickHandler(event.target)}
      disabled={disabled}
      data-testid="button"
      {...rest}
    >
      {label}
    </StyledButton>
  );
};
