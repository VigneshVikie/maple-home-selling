import Image from "next/image";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";

const Header = () => {
  return (
    <div
      className="flex 
    justify-between 
    items-center 
    w-full 
    h-28 
    pr-32 
    pl-28"
    >
      <Image src={logo} />
      <div
        className="
      w-2/5
      flex 
      justify-end 
      gap-5"
      >
        <div
          className="flex 
        items-center
        justify-center
        gap-3"
        >
          <Image src={phone} />
          <p
            className="font-normal
          text-lg"
          >
            +19052061444
          </p>
        </div>
        <div
          className="flex 
        items-center
        justify-center
        gap-3"
        >
          <Image src={email} />
          <p
            className="font-normal
          text-lg"
          >
            info@thecanadianhome.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
