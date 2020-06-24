import React, { useEffect } from "react";

const ModalBackdrop = (props) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "";
    };
  });

  return (
    <div
      className={`modal__backdrop ${props.modalClass}`}
      onAnimationEnd={props.onAnimationEnd}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default ModalBackdrop;
