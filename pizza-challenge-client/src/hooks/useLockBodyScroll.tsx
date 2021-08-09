import { useLayoutEffect } from "react";

export const useLockBodyScroll = (open: boolean) => {
  useLayoutEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(
      document.body
    ).overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, [open]);
};
