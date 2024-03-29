import { createPortal } from "react-dom";

import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute top-0 z-40 h-screen w-screen backdrop-blur grid place-items-center ">
          <div className="m-auto relative z-50 min-h-[auto] min-w-[350px]  bg-white p-4 rounded-2xl">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl " />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
