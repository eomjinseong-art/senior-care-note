/**
 * 운영 설정 — 상담 버튼 링크는 이 파일 한 곳에서만 관리합니다.
 *
 * CTA_URLS: 탭(서비스)별 디비센스 홍보 URL. 값을 비우면 그 탭의 상담 버튼이
 *   「상담 연결 준비 중」으로 바뀌고 링크가 나가지 않습니다.
 */
export const CTA_URLS = {
  "lonely-death-cleaning": "https://t0qogumjsd.sens.kr",
  "estate-cleanup": "https://fc15opu8l8.sens.kr",
  "care-home-move-out": "https://rkvmam3mue.sens.kr",
  demolition: "https://wd6qquc6tn.sens.kr",
  "hospital-companion": "https://x2eukdqjht.sens.kr",
  "elderly-care-assistant": "https://x3eugz852v.sens.kr",
} as const;

export type ServiceSlug = keyof typeof CTA_URLS;

/** 검색엔진 소유 확인 코드(네이버 서치어드바이저, 구글 서치 콘솔). 받은 content 값만 넣으세요. */
export const NAVER_SITE_VERIFICATION = "";
export const GOOGLE_SITE_VERIFICATION = "";
