import Link from "next/link";
import { JsonLd } from "@/components/ui";
import { GROUPS, services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_SUB, SITE_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "고독사 특수청소·유품정리·집 정리·철거, 돌봄 직업 가이드",
  description: SITE_SUB,
  path: "/",
  keywords: ["고독사 특수청소", "유품정리 업체", "요양원 입소 후 집 정리", "철거 견적", "병원 동행 매니저 자격증", "노인돌봄 생활지원사 자격증"],
});

export default function Home() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: SITE_URL, inLanguage: "ko-KR" }} />
      <section className="rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 px-6 py-10 text-white sm:px-10">
        <p className="text-xs font-semibold tracking-wider text-teal-100">가족의 정리 · 새 돌봄 직업</p>
        <h1 className="mt-3 text-2xl font-bold leading-snug sm:text-4xl">
          처음 겪는 정리와 돌봄,
          <br />순서대로 차분하게
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-teal-50">{SITE_SUB}</p>
      </section>

      {(["family", "career"] as const).map((g) => (
        <section key={g} id={g} className="mt-12 scroll-mt-28">
          <h2 className="text-xl font-bold">{GROUPS[g].title}</h2>
          <p className="mt-1 text-sm text-slate-600">{GROUPS[g].sub}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {services
              .filter((s) => s.group === g)
              .map((s) => (
                <Link key={s.slug} href={`/${s.slug}`} className="block rounded-2xl border border-slate-200 p-5 hover:border-teal-600">
                  <span className="text-xs font-semibold text-teal-700">{s.tab}</span>
                  <span className="mt-1 block font-semibold text-slate-900">{s.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-slate-600">{s.short}</span>
                </Link>
              ))}
          </div>
        </section>
      ))}

      <section className="mt-12 rounded-2xl bg-slate-50 p-5 sm:p-6">
        <h2 className="text-lg font-bold">이렇게 이어지는 경우가 많아요</h2>
        <ul className="mt-3 space-y-2 text-[15px] leading-7 text-slate-700">
          <li>
            <Link href="/care-home-move-out" className="font-semibold text-teal-700">요양원 입소 후 집 정리</Link> → 필요하면{" "}
            <Link href="/demolition" className="font-semibold text-teal-700">철거·원상복구</Link>
          </li>
          <li>
            <Link href="/lonely-death-cleaning" className="font-semibold text-teal-700">특수청소</Link> →{" "}
            <Link href="/estate-cleanup" className="font-semibold text-teal-700">유품정리</Link> → 상속 정리
          </li>
          <li>
            부모님 돌봄 경험 → <Link href="/hospital-companion" className="font-semibold text-teal-700">병원 동행 매니저</Link>나{" "}
            <Link href="/elderly-care-assistant" className="font-semibold text-teal-700">노인돌봄 생활지원사</Link>로 새 일 찾기
          </li>
        </ul>
      </section>
    </>
  );
}
