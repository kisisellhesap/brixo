import { FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socialcons = () => {
  return (
    <div className="flex gap-2">
      <button className="icon">
        <FaInstagram />
      </button>
      <button className="icon">
        <FaXTwitter />
      </button>
      <button className="icon">
        <FaPinterest />
      </button>
    </div>
  );
};

export default Socialcons;
