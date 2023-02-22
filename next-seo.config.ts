import type { NextSeoProps } from "next-seo";

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: undefined,
  titleTemplate: "%s | 침무위키",
  defaultTitle: "침무위키",
  description: "한국인들만의 밈 백과사전",
  canonical: "https://", // 중복 URL이 있을 때 검색엔진에 대표가 되는 URL 주소를 알려준다.
  // canonical URL reference : https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls?hl=ko&visit_id=638076126224869568-2592139246&rd=1
  mobileAlternate: {
    media: "only screen and (max-width: 640px)",
    href: "https://",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://",
    title: "Open Graph Title A",
    description: "Open Graph Description A",
    images: [
      {
        url: "이미지url",
        width: 800,
        height: 600,
        alt: "Og Image Alt A",
        type: "image/jpeg",
        secureUrl: "secureUrl",
      },
    ],
    siteName: "침무위키",
  },
  twitter: {
    handle: "@handleA", // twitter:creator
    site: "@sitea", // twitter:site
    cardType: "summary_large_image", // twitter:card
    // Twitter will read the og:title, og:image and og:description tags for their card.
    // next-seo omits twitter:title, twitter:image and twitter:description to avoid duplication.
    // twitter card reference : https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary
  },
  facebook: {
    appId: "123456789",
  },
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      href: "https://",
      sizes: "76x76",
    },
  ],
};
