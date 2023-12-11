import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="pt-[6px]" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <RxCross2 size={32} /> : <IoIosMenu size={32} />}
      </button>
    </div>
  );
};

export default Dropdown;
