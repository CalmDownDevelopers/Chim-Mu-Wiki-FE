import Image from "next/image";
import ArrowUp from "@/assets/icons/arrow_up.svg";

export const ScrollButton = () => {
  return (
    <button
      type="button"
      className="w-5 h-5 bg-main fixed right-1 bottom-1 flex items-center justify-center"
    >
      <Image src={ArrowUp} alt="arrow_up" />
    </button>
  );
};
