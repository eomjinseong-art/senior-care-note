export const SITE_NAME = "시니어 정리·돌봄 노트";
export const SITE_TAGLINE = "가족의 정리와 돌봄, 그리고 새로 떠오르는 돌봄 직업";
export const SITE_SUB =
  "고독사 특수청소, 유품정리, 요양원 입소 후 집 정리, 철거 견적처럼 가족이 갑자기 맞닥뜨리는 일과, 병원 동행 매니저·노인돌봄 생활지원사처럼 고령화와 함께 관심이 커지는 돌봄 직업을 차분하게 정리했습니다. 언제 필요한지, 절차와 체크리스트, 업체나 교육기관을 고를 때 확인할 점을 한곳에서 보세요.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://senior-care-note.vercel.app";

/** Abacus visitor counter. One hit per browser per local day; test traffic is excluded. */
export const ABACUS_NAMESPACE = "senior-care-note";
export const ABACUS_KEY = "visits";
export const ABACUS_STORAGE_KEY = "senior-care-note:visits:day";
export const PROD_HOSTS = ["senior-care-note.vercel.app"];

export const AD_DISCLOSURE =
  "이 페이지에는 제휴마케팅 링크가 포함되어 있으며, 상담·신청 시 운영자가 수수료를 받을 수 있습니다.";

export const INFO_NOTE =
  "이 사이트의 내용은 일반적인 정보 정리입니다. 실제 비용과 절차는 현장 상황, 지역, 업체·기관 조건에 따라 달라지며, 법률·세무·상속 문제는 전문가나 관할 기관에 확인하세요.";

export const NAV = [
  { href: "/", label: "홈" },
  { href: "/#family", label: "가족의 정리" },
  { href: "/#career", label: "새 돌봄 직업" },
  { href: "/about", label: "안내·광고 고지" },
] as const;

export const SISTER_SITES = [
  { label: "장기렌트 비교노트", url: "https://longrent-guide.vercel.app" },
  { label: "나두 허브", url: "https://tinalinkeom.vercel.app" },
] as const;

export function sisterUrl(base: string, medium = "footer") {
  const url = new URL("/", base);
  url.searchParams.set("utm_source", "senior-care-note");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", "site-network");
  return url.toString();
}
