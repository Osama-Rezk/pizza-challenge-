import styled from "@emotion/styled";

export const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gridGap: "1rem",
});
