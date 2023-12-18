import React from "react";

const Modal = ({ open, children }) => {
  return (
    <div>
      {open && (
        <div className="flex justify-end p-1 bg-white shadow-md fixed top-1/2 bottom-1/2 w-1/2 h-[600px]">
          x
        </div>
      )}
      {children}
    </div>
  );
};

export default Modal;
