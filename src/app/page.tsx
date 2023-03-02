import Image from "next/image";
import Dict from "@/assets/icons/dictionary.svg";
import Write from "@/assets/icons/write.svg";
import Video from "@/assets/icons/video.svg";
import Send from "@/assets/icons/send.svg";

const NavigateButton = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <button
      type="button"
      className="w-full h-8 flex items-center border-b-[5px] border-highlight"
    >
      <div className="w-9 h-full bg-main flex items-center justify-center ">
        <Image src={icon} alt="dictionary" />
      </div>
      <div className="ml-2 flex flex-col items-start">
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </button>
  );
};

const Page = () => {
  return (
    <div className=" px-3 pt-5">
      <div className="flex flex-col gap-2">
        <h1>침무위키 : 대문</h1>
        <h4 className="ml-1">
          침무위키는 ‘그뭔씹’을 방지하기 위해 <br />
          한국인들이 함께 만들어가는 밈 백과사전입니다.
        </h4>
      </div>
      <div className="w-52 border-[5px] border-b-0 border-highlight mt-4">
        <NavigateButton
          title="밈 백과사전"
          description="한국인들이 사용하는 밈을 알아보아요."
          icon={Dict}
        />
        <NavigateButton
          title="백과사전 쓰기"
          description="백과사전에 새로운 밈을 추가해보세요. 추천을 많이 받으면 등재가 될지도?."
          icon={Write}
        />
        <NavigateButton
          title="침투부 영상 모아보기"
          description="침투부 영상을 카테고리별로 찾아보세요."
          icon={Video}
        />
        <NavigateButton
          title="건의게시판"
          description="개발자들아 이거 해 ‘줘’ 게시판입니다."
          icon={Send}
        />
      </div>
    </div>
  );
};

export default Page;
