import {
  useState,
  useRef,
  useEffect,
  CSSProperties,
  PropsWithChildren,
} from "react";
import { Portal } from "../portal";
import {
  Backdrop,
  Content,
  CloseWrapper,
  ModalHeader,
  ModalBody,
  ModalTitle,
} from "./modal.style";
import { useLockBodyScroll } from "../../hooks";
import { CloseIcon } from "../icons";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  contentStyle?: CSSProperties;
}
export function Modal(props: PropsWithChildren<ModalProps>) {
  const [active, setActive] = useState(false);
  const { open, onClose, title } = props;
  const backdrop = useRef<HTMLDivElement>(null);
  useLockBodyScroll(open);

  useEffect(() => {
    const { current } = backdrop;

    const transitionEnd = () => setActive(open);

    const clickHandler = (e: Event) => {
      e.target === current && onClose();
    };

    const keyHandler = (e: KeyboardEvent) => {
      [27].indexOf(e.which) >= 0 && onClose();
    };

    if (current) {
      current.addEventListener("transitionend", transitionEnd);
      current.addEventListener("click", clickHandler);
      window.addEventListener("keyup", keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }

        setActive(open);
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener("transitionend", transitionEnd);
        current.removeEventListener("click", clickHandler);
      }

      window.removeEventListener("keyup", keyHandler);
    };
  }, [open, onClose]);

  return (
    <>
      {(open || active) && (
        <Portal className="modal-portal">
          <Backdrop
            ref={backdrop}
            className={active && open ? "active" : undefined}
          >
            <Content className="modal-content">
              <ModalHeader>
                <ModalTitle>{title}</ModalTitle>
                <CloseWrapper onClick={onClose}>
                  <CloseIcon />
                </CloseWrapper>
              </ModalHeader>
              <ModalBody>{props.children}</ModalBody>
            </Content>
          </Backdrop>
        </Portal>
      )}
    </>
  );
}
