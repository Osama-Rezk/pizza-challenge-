import { Menu } from "./pages/menu";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div({
  maxWidth: 1170,
  padding: "0 16px",
  margin: "0 auto",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  boxSizing: "border-box",

  "@media screen and (max-width: 575px)": {
    padding: "0 5px",
  },
});

function App() {
  return (
    <div>
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
              "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
              monospace;
          }
        `}
      />
      <Container data-testid="app-container">
        <Menu />
      </Container>
    </div>
  );
}

export default App;
