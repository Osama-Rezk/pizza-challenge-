import { SVGProps } from "react";

function Plus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 50 50"
      version="1.1"
      viewBox="0 0 50 50"
      xmlSpace="preserve"
      height={20}
      width={20}
      {...props}
    >
      <circle cx="25" cy="25" r="25" fill="#43B05C"></circle>
      <path
        fill="none"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M25 13L25 38"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M37.5 25L12.5 25"
      ></path>
    </svg>
  );
}

export { Plus };
