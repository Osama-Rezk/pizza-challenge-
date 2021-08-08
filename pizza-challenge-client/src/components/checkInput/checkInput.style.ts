import styled from "@emotion/styled";
import { color, space, fontSize } from "../../styles";
const { darkCharcoal } = color;

export const CheckInputContainer = styled.label({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  cursor: "pointer",
});

export const CheckInputLabel = styled.i({
  color: darkCharcoal,
  fontSize: fontSize.text,
  margin: space[0],
  cursor: "pointer",
});

export const CheckInputInput = styled.input({});
