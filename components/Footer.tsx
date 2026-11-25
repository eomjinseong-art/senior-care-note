import Link from "next/link";
import { services } from "@/data/services";
import { INFO_NOTE, SISTER_SITES, SITE_NAME, sisterUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 pt-8">
        <h2 className="text-xs font-semibold tracking-wider text-slate-500">함께 보면 좋은 사이트</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {SISTER_SITES.map((site) => (
            <a key={site.url} href={sisterUrl(site.url)} className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-600 hover:border-teal-600 hover:text-teal-700">
              {site.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-5xl space-y-3 px-4 py-8 text-xs leading-6 text-slate-500">
        <p className="font-semibold text-slate-700">{SITE_NAME}</p>
        <p>{INFO_NOTE}</p>
        <p>이 사이트는 운영자가 만든 정보 사이트로, 청소·정리·철거 업체나 교육기관이 아닙니다. 「광고」 표시가 붙은 상담 버튼은 제휴 상담 페이지로 연결되며 상담·신청 시 운영자가 수수료를 받을 수 있습니다.</p>
        <nav className="flex flex-wrap gap-x-4 gap-y-1">
          <Link href="/about" className="hover:text-teal-700">사이트 안내·광고 고지</Link>
          {services.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="hover:text-teal-700">{s.tab}</Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
