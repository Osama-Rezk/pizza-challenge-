import styled from "@emotion/styled";
import { space, color } from "../../styles";

const { darkCharcoal, gray } = color;

export const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  width: "100%",
  gridGap: 25,
});

export const SectionTitle = styled.h1({
  color: darkCharcoal,
  fontWeight: 700,
  marginBottom: space[1],
});

export const Section = styled.div({
  display: "flex",
  flexDirection: "column",
  marginBottom: space[2],
});

export const SectionBody = styled.div({
  backgroundColor: gray,
  borderRadius: space[0],
  padding: space[2],
});

export const DetailsRaw = styled.div({
  display: "flex",
  alignItems: "flex-start",
  width: "100%",
  margin: "10px 0",
});

export const Title = styled.span({
  fontWeight: 700,
});

export const Value = styled.span({
  margin: "0 10px",
});

export const DetailsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});
export const ButtonContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  justifyContent: "center",
});
