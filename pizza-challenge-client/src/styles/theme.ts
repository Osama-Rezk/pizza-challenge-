export const spaceFactor = 8;
export const space = [
  spaceFactor / 2, // 4
  spaceFactor, // 8
  spaceFactor * 2, // 16
  spaceFactor * 3, // 24
  spaceFactor * 4, // 32
  spaceFactor * 5, // 40
  spaceFactor * 6, // 48
];

export const color = {
  transparent: "transparent",
  black: "black",
  dark: "rgb(33, 33, 33)",
  white: "white",
  backDrop: "rgba(51, 51, 51, 0.3)",
  darkCharcoal: "rgb(51, 51, 51)",
  gray: "#ccc",
  lightGray: "rgb(229, 229, 229)",
  lightGray2: "#eee",
  darkGray: "#444",
};

export const fontSize = {
  base: 16,
  text: 16,
  small: 13,
  h1: 48,
  h2: 36,
  h3: 24,
  h4: 18,
  h5: 16,
  h6: 16,
};

export const mq = {
  small: "@media screen and (max-width: 600px)",
  medium: "@media only screen and (min-width: 600px)",
  large: "@media only screen and (min-width: 992px)",
};

export const buttonTextTransform = "uppercase";
