import { InputHTMLAttributes } from "react";
import {
  RadioButtonContainer,
  RadioButtonLabel,
  RadioButtonInput,
} from "./radioButton.style";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const RadioButton = (props: RadioButtonProps) => {
  const { label, ...rest } = props;
  return (
    <RadioButtonContainer>
      <RadioButtonInput type={"radio"} {...rest} />
      <RadioButtonLabel>{label}</RadioButtonLabel>
    </RadioButtonContainer>
  );
};
