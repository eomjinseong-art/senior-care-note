import { CTA_URLS, type ServiceSlug } from "@/lib/config";
import type { Service } from "@/data/services";

/** 탭별 상담 버튼. 링크는 lib/config.ts의 CTA_URLS 한 곳에서 관리합니다. */
export function Cta({ service, compact = false }: { service: Service; compact?: boolean }) {
  const url = (CTA_URLS[service.slug as ServiceSlug] ?? "").trim();
  return (
    <section className={`${compact ? "mt-6" : "mt-12"} rounded-2xl border border-teal-200 bg-teal-50 p-5 sm:p-6`} aria-label={`${service.tab} 상담`}>
      <div className="flex items-center gap-2">
        <span className="rounded border border-slate-400 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600">광고</span>
        <h2 className="text-base font-bold text-slate-900">{service.cta.title}</h2>
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{service.cta.body}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {url ? (
          <a href={url} target="_blank" rel="sponsored noopener" className="inline-flex items-center rounded-xl bg-teal-700 px-5 py-3 text-sm font-bold text-white hover:bg-teal-800" data-cta={service.slug}>
            {service.cta.label} →
          </a>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center rounded-xl bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-500" aria-disabled="true" data-cta="pending">
            상담 연결 준비 중
          </span>
        )}
        <span className="rounded border border-slate-400 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600">광고</span>
      </div>
      <p className="mt-3 text-[11px] leading-5 text-slate-500">「광고」 버튼을 누르면 제휴 상담 신청 페이지로 이동합니다. 상담·신청 시 운영자가 수수료를 받을 수 있습니다. 이 사이트는 신청서를 받거나 개인정보를 저장하지 않습니다.</p>
    </section>
  );
}
