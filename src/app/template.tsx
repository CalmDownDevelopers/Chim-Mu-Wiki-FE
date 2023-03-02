import { Header } from "../components/Header/Header";
import { ScrollButton } from "../components/ScrollButton/ScrollButton";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <ScrollButton />
    </div>
  );
};

export default template;

// layout과 다르게, navigate될 때마다 새로 인스턴스를 생성합니다.(state is not shared)
// 생성, 삭제 애니메이션이나 useEffect, useState에 의존하는 요소들에 사용할 수 있습니다.
// 자동으로 페이지를 <Template/>로 감쌉니다.
// <Template>
//      <Page/>
// </Template>
