import { Breadcrumb, PageTitle } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { AD_DISCLOSURE, INFO_NOTE, SITE_NAME } from "@/lib/site";

export const metadata = pageMetadata({
  title: "사이트 안내와 광고 고지",
  description: `${SITE_NAME}의 운영 방식, 제휴마케팅 광고 고지, 정보의 한계를 안내합니다.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/", label: "홈" }, { label: "사이트 안내" }]} />
      <PageTitle kicker="안내" title="사이트 안내와 광고 고지" />
      <div className="space-y-4 text-[15px] leading-7 text-slate-700">
        <p>{SITE_NAME}는 운영자가 가족의 정리(특수청소, 유품정리, 요양원 입소 후 집 정리, 철거)와 새로 떠오르는 돌봄 직업(병원 동행 매니저, 노인돌봄 생활지원사)에 필요한 정보를 정리한 사이트입니다. 청소·정리·철거 업체나 교육기관이 아니며, 상담 신청서를 직접 받지 않습니다.</p>
        <h2 className="pt-2 text-lg font-bold text-slate-900">광고 고지</h2>
        <p>{AD_DISCLOSURE} 「광고」 표시가 붙은 상담 버튼은 제휴 상담 신청 페이지로 연결되며, 이 사이트는 개인정보를 수집하거나 저장하지 않습니다.</p>
        <h2 className="pt-2 text-lg font-bold text-slate-900">정보의 한계</h2>
        <p>{INFO_NOTE} 이 사이트는 구체적인 가격이나 결과, 취업을 약속하지 않습니다. 자격 과정은 민간자격정보서비스(pqi.or.kr)에서 등록 여부를 직접 확인하세요.</p>
        <h2 className="pt-2 text-lg font-bold text-slate-900">도움이 필요할 때</h2>
        <p>갑작스러운 이별로 마음이 힘들다면 정신건강 상담전화 109, 지역 정신건강복지센터에서 상담을 받을 수 있습니다.</p>
      </div>
    </>
  );
}
