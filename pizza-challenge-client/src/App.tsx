import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq, space } from "./styles";
import Routes from "./routes";
import { AppProviders } from "./context";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

export const Container = styled.div({
  maxWidth: 1170,
  padding: ` 0 ${space[2]}px `,
  margin: "0 auto",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  boxSizing: "border-box",

  [mq.large]: {
    padding: `0 ${space[1]}px `,
  },
});

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
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
      <AppProviders>
        <Container data-testid="app-container">
          <Routes />
        </Container>
      </AppProviders>
    </ErrorBoundary>
  );
}

export default App;
