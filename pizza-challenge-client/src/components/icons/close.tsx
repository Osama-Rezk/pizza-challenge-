import { SVGProps } from "react";

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="black"
      {...props}
    >
      <title>Close Modal</title>
      <defs>
        <filter>
          <feDropShadow dx="0" dy="0" stdDeviation="1"></feDropShadow>
        </filter>
      </defs>
      <svg>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
      </svg>
    </svg>
  );
}

export default CloseIcon;
