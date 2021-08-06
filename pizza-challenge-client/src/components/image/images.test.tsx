import { render, screen } from "@testing-library/react";
import { Image } from ".";
import Img from "../../assets/images/pizza-placeholder.png";

it("It should Main Image  ", () => {
  render(<Image src="http://placeimg.com/640/480/nature?random=821" />);

  const image = screen.getByTestId("image");

  expect(image).toHaveAttribute(
    "src",
    "http://placeimg.com/640/480/nature?random=821"
  );
});

it("It should   place Holder  Image ", () => {
  render(<Image src="" />);

  const image = screen.getByTestId("holder-image");

  expect(image).toHaveAttribute("src", Img);
});
