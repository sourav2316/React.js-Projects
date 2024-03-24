import { MdEmail, MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Buttons = ({ ...rest }) => {
  return (
    <>
      <p className="d-flex justify-content-center gap-5">
        <button
          {...rest}
          type="button"
          className="btn btn-light chat-call text-fix"
        >
          VIA SUPPORT CHAT
          <MdOutlineMessage className="icon" />
        </button>
        <button
          {...rest}
          type="button"
          className="btn btn-light chat-call text-fix"
        >
          VIAL CALL
          <IoCall className="icon" />
        </button>
      </p>
      <p {...rest} className="d-flex">
        <button type="button" className="btn active chat-call">
          VIA EMAIL FORM
          <MdEmail className="icon" />
        </button>
      </p>
    </>
  );
};

export default Buttons;
