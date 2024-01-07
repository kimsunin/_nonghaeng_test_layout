// header link

export const headerLinks = [
  {
    title: "소개",
    href: "/introduce",
    subMenu: [
      { title: "소개1", href: "/introduce/child1" },
      { title: "소개2", href: "/introduce/child2" },
      { title: "소개3", href: "/introduce/child3" },
    ],
  },
  {
    title: "여행",
    href: "/travel",
    subMenu: [
      { title: "여행1", href: "/travel/child1" },
      { title: "여행2", href: "/travel/child2" },
      { title: "여행3", href: "/travel/child3" },
      { title: "여행4", href: "/travel/child3" },
    ],
  },
  {
    title: "기획",
    href: "/plan",
    subMenu: [
      { title: "기획1", href: "/plan/child1" },
      { title: "기획2", href: "/plan/child2" },
    ],
  },
  {
    title: "커뮤니티",
    href: "/community",
    subMenu: [
      { title: "커뮤니티1", href: "/community/child1" },
      { title: "커뮤니티2", href: "/community/child2" },
      { title: "커뮤니티3", href: "/community/child3" },
      { title: "커뮤니티4", href: "/community/child3" },
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
