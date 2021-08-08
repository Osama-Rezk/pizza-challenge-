import { useState, PropsWithChildren, HTMLAttributes } from "react";
import {
  AccordionContainer,
  AccordionTitle,
  AccordionHeader,
  AccordionIcon,
  AccordionBody,
} from "./accordion.style";

interface AccordionProps {
  title: string;
  isOpenDefault: boolean;
}

export interface StyledProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export const Accordion = (props: PropsWithChildren<AccordionProps>) => {
  const { title, isOpenDefault, children } = props;
  const [active, setActive] = useState(isOpenDefault);

  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => setActive(!active)}>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionIcon active={active} />
      </AccordionHeader>
      <AccordionBody active={active}>{children}</AccordionBody>
    </AccordionContainer>
  );
};
