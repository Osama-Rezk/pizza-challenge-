import { InputHTMLAttributes } from "react";
import {
  CheckInputContainer,
  CheckInputLabel,
  CheckInputInput,
} from "./checkInput.style";

interface CheckInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const CheckInput = (props: CheckInputProps) => {
  const { label, ...rest } = props;
  return (
    <CheckInputContainer>
      <CheckInputInput type={"radio"} {...rest} />
      <CheckInputLabel>{label}</CheckInputLabel>
    </CheckInputContainer>
  );
};
