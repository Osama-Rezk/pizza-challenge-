import styled from "@emotion/styled";
import { space, color, fontSize } from "../../../styles";

const { darkCharcoal } = color;

export const InfoContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gridGap: "1rem",
  padding: space[1],
});

export const NameDescriptionContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});

export const Name = styled.strong({
  color: darkCharcoal,
  fontSize: fontSize.text,
  fontWeight: 700,
});

export const Description = styled.span({
  color: darkCharcoal,
  fontSize: fontSize.small,
});

export const PriceContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const CurrencySymbol = styled.span({
  margin: `0 ${space[0]}px`,
});

export const Quantity = styled.span({
  color: darkCharcoal,
  fontSize: fontSize.text,
});

export const QtyPriceContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const PriceLabel = styled.strong({
  color: darkCharcoal,
  fontSize: fontSize.text,
  fontWeight: 700,
  margin: `0 ${space[1]}px`,
});

export const SizesContainer = styled.div({
  display: "flex",
  flexDirection: "row",
});
