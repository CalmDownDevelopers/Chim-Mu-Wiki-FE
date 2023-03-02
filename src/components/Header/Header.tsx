import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";
import User from "@/assets/icons/user.svg";

export const Header = () => {
  return (
    <div className="w-[100vw] h-4 bg-main flex items-center justify-between">
      <button type="button" className="p-1">
        <Image src={Logo} alt="logo" width={100} />
      </button>
      <div className="flex gap-1 items-center ">
        <input type="text" className="w-20 h-3 border-[1px] pl-1 " />
        <button type="button" className="p-1">
          <Image src={User} alt="user" width={40} />
        </button>
      </div>
    </div>
  );
};
