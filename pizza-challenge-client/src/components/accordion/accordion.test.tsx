import { render, screen } from "@testing-library/react";
import { Accordion } from "./";

describe("testing Accordion  Component", () => {
  it("should render Accordion correctly", () => {
    render(<Accordion title="Accordion Title ">Accordion Content</Accordion>);

    expect(screen.getByText("Accordion Title")).toBeInTheDocument();

    expect(screen.getByTestId("accordion-body")).not.toBeVisible();
  });

  it("Should Show Content If passed isOpenDefault props ", () => {
    render(
      <Accordion title="Accordion Title " isOpenDefault={true}>
        Accordion Content
      </Accordion>
    );

    expect(screen.getByTestId("accordion-body")).toBeVisible();
  });
});
