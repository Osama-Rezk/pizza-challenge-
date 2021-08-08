import styled from "@emotion/styled";
import { space, color, fontSize } from "../../styles";

const { green, white, nobelGray } = color;

export const StyledButton = styled.button(
  {
    border: "none",
    color: white,
    background: green,
    fontSize: fontSize.text,
    padding: space[1],
    borderRadius: 4,
    margin: `${space[2]}px 0`,
    cursor: "pointer",
    transition:
      "background-color 0.1s linear, color 0.1s linear, border 0.1s linear, outline 0.1s linear",
  },
  ({ disabled }) => {
    if (disabled)
      return {
        "&:hover": {
          cursor: "not-allowed",
        },
        background: nobelGray,
      };
  }
);
