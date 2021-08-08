import { CSSProperties, InputHTMLAttributes } from "react";
import {
  StyledInput,
  InputContainer,
  InputLabel,
  InputError,
} from "./input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerStyle?: CSSProperties;
}

export const Input = (props: InputProps) => {
  const { label, error, containerStyle, ...rest } = props;
  return (
    <InputContainer style={containerStyle}>
      <InputLabel>{label}</InputLabel>
      <StyledInput data-testid="base-input" {...rest} />
      {error && <InputError>{error}</InputError>}
    </InputContainer>
  );
};
