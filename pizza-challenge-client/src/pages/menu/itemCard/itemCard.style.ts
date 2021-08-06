import styled from "@emotion/styled";
import { Image } from "../../../components/image";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  borderRadius: 5,
  boxShadow: "0 1px 4px rgb(41 51 57 / 50%)",
  minWidth: 300,
  height: 310,
});

export const InfoContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  padding: "10px 5px",
});

export const StyledImage = styled(Image)({
  height: 200,
  width: "100%",
});

export const Name = styled.span({
  margin: "5px 0",
  fontWeight: 400,
  fontSize: 16,
  textOverflow: "ellipsis",
  color: "#222222",
});

export const Description = styled.span({
  textOverflow: "ellipsis",
  overflow: "hidden",
  fontSize: 16,
  whiteSpace: "nowrap",
  margin: "5px 0",
});

export const PriceBtnContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
});

export const Price = styled.div({
  fontSize: 16,
  whiteSpace: "nowrap",
});
