import { CSSProperties, ImgHTMLAttributes, useState } from "react";
import styled from "@emotion/styled";
import Img from "../../assets/images/pizza-placeholder.png";

export const StyledImage = styled.img({
  height: "100%",
  width: "100%",
});

const ImagePlaceholder = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      height="100%"
      alt="loading"
      width="100%"
      src={Img}
      {...props}
      data-testid="holder-image"
    />
  );
};
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  placeHolderStyle?: CSSProperties;
}

export const Image = (props: ImageProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const { src, placeHolderStyle = {} } = props;

  const imageStyle = !loaded ? { display: "none" } : {};
  return (
    <>
      {!loaded && <ImagePlaceholder style={placeHolderStyle} />}

      <StyledImage
        data-testid="image"
        src={src}
        style={imageStyle}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </>
  );
};
