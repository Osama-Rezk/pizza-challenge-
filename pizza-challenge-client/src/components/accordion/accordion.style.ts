import styled from "@emotion/styled";
import { Chevron } from "../icons";
import { color, space, fontSize } from "../../styles";
import { StyledProps } from "./accordion";

const { gray, darkGray, lightGray2, white } = color;

export const AccordionContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  marginBottom: space[1],
});

export const AccordionHeader = styled.div(
  {
    backgroundColor: lightGray2,
    color: darkGray,
    cursor: "pointer",
    padding: space[2],
    display: "flex",
    alignItems: "center",
    border: "none",
    outline: "none",
    "&:hover": {
      backgroundColor: gray,
    },
  },
  (props: StyledProps) => {
    if (props.active)
      return {
        backgroundColor: gray,
      };
  }
);

export const AccordionTitle = styled.span({
  fontWeight: 600,
  fontSize: fontSize.text,
});

export const AccordionIcon = styled(Chevron)(
  {
    marginLeft: "auto",
    transition: "transform 0.4s ease",
  },
  (props: StyledProps) => {
    if (props.active)
      return {
        transform: "rotate(90deg)",
      };
  }
);

export const AccordionBody = styled.div(
  {
    backgroundColor: white,
    overflow: "hidden",
    display: "none",
    padding: space[2],
  },
  (props: StyledProps) => {
    if (props.active) return { display: "block" };
  }
);
