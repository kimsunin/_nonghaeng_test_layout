// header link
export const mainMenuData = [
  { title: "소개", href: "/introduces" },
  { title: "여행", href: "/travel" },
  { title: "기획", href: "/plan" },
  { title: "커뮤니티", href: "/comunity" },
];

export const subMenuData = [
  {
    title: ["소개1", "소개2", "소개3"],
    href: ["/indtroduce/child1", "/indtroduce/child1", "/indtroduce/child1"],
  },
  {
    title: ["여행1", "여행2", "여행3", "여행4"],
    href: [
      "/travle/child1",
      "/travle/child2",
      "/travle/child3",
      "/travle/child4",
    ],
  },
  {
    title: ["기획1", "기획2"],
    href: ["/plan/child1", "/plan/child2"],
  },
  {
    title: ["커뮤니티1", "커뮤니티2", "커뮤니티3", "커뮤니티4"],
    href: [
      "/community/child1",
      "/community/child2",
      "/community/child3",
      "/community/child4",
    ],
  },
];

// navigator links
export const introduceLinks = {
  parent: { url: "/introduce", title: "소개" },
  child1: { url: "/introduce/child1", title: "소개1" },
  child2: { url: "/introduce/child2", title: "소개2" },
  child3: { url: "/introduce/child3", title: "소개3" },
};

export const travelLinks = {
  parent: { url: "/travel", title: "여행" },
  child1: { url: "/travel/child1", title: "여행1" },
  child2: { url: "/travel/child2", title: "여행2" },
  child3: { url: "/travel/child3", title: "여행3" },
  child4: { url: "/travel/child4", title: "여행4" },
};

export const planLinks = {
  parent: { url: "/plan", title: "기획" },
  child1: { url: "/plan/child1", title: "기획1" },
  child2: { url: "/plan/child2", title: "기획2" },
};

export const communityLinks = {
  parent: { url: "/community", title: "커뮤니티" },
  child1: { url: "/community/child1", title: "커뮤니티1" },
  child2: { url: "/community/child2", title: "커뮤니티2" },
  child3: { url: "/community/child3", title: "커뮤니티3" },
  child4: { url: "/community/child4", title: "커뮤니티4" },
};

export const sitemapLinks = {
  parent: { url: "/sitemap", title: "사이트맵" },
};

export const mypageLinks = {
  parent: { url: "/mypage", title: "마이페이지" },
  child1: { url: "/mypage/child1", title: "마이페이지1" },
  child2: { url: "/mypage/child2", title: "마이페이지2" },
  child3: { url: "/mypage/child3", title: "마이페이지3" },
  child4: { url: "/mypage/child4", title: "마이페이지4" },
};
