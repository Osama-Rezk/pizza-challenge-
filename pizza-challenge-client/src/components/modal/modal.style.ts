import styled from "@emotion/styled";
import { color, space, mq } from "../../styles";
const { lightGray, dark, white, backDrop } = color;

export const CloseWrapper = styled.button({
  height: 44,
  width: 44,
  top: 0,
  right: 0,
  border: "none",
  background: color.transparent,
  cursor: "pointer",
});

export const ModalHeader = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: space[1],
  borderBottom: `1px solid ${lightGray}`,
});

export const ModalTitle = styled.div({
  color: dark,
  fontWeight: 500,
});

export const ModalBody = styled.div({});

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${backDrop};
  backdrop-filter: blur(1px);
  opacity: 0;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 200ms;
  display: flex;
  align-items: center;
  justify-content: center;

  & .modal-content {
    transform: translateY(100px);
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  &.active {
    transition-duration: 250ms;
    transition-delay: 0ms;
    opacity: 1;

    & .modal-content {
      transform: translateY(0);
      opacity: 1;
      transition-delay: 150ms;
      transition-duration: 350ms;
    }
  }
`;

export const Content = styled.div({
  position: "relative",
  minHeight: "50px",
  minWidth: "50px",
  boxShadow: " 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  backgroundColor: white,
  borderRadius: "2px",
  width: "60%",
  height: "60%",

  [mq.small]: {
    width: "100%",
    height: "100%",
  },
  [mq.medium]: {
    width: "100%",
    height: "100%",
  },
  [mq.large]: {
    width: "60%",
    height: "60%",
  },
});
