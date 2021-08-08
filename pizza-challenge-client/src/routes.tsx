import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Menu } from "./pages/menu";
import { Checkout } from "./pages/checkout";

import styled from "@emotion/styled";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const Routes = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route component={() => <div>Route not found 404</div>} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Routes;
