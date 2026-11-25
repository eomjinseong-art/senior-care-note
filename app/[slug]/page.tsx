import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { Breadcrumb, Checklist, Faq, faqLd, JsonLd, PageTitle, Sections } from "@/components/ui";
import { GROUPS, serviceBySlug, services, type Section } from "@/data/services";
import { canonicalUrl, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return pageMetadata({ title: s.title, description: s.description, path: `/${s.slug}`, keywords: s.keywords });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();
  const isCareer = s.group === "career";
  const top: Section[] = [
    { h: isCareer ? "이런 분께 맞아요" : "이럴 때 필요해요", list: s.when },
    { h: isCareer ? "준비 순서" : "진행 순서", steps: s.steps },
  ];
  const bottom: Section[] = [
    { h: isCareer ? "교육기관 고를 때 확인할 점" : "업체 고를 때 확인할 점", list: s.choose },
    { h: isCareer ? "교육비에 영향을 주는 요소" : "비용에 영향을 주는 요소", table: s.costFactors, p: [s.costNote] },
    ...(s.extra ?? []),
  ];
  const related = s.related.map((r) => serviceBySlug(r)).filter((x): x is NonNullable<typeof x> => Boolean(x));
  return (
    <>
      <JsonLd data={faqLd(s.faq)} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: s.title, description: s.description, inLanguage: "ko-KR", mainEntityOfPage: canonicalUrl(`/${s.slug}`), author: { "@type": "Organization", name: "운영자" } }} />
      <Breadcrumb items={[{ href: "/", label: "홈" }, { href: `/#${s.group}`, label: GROUPS[s.group].title }, { label: s.tab }]} />
      <PageTitle kicker={`${GROUPS[s.group].title} · ${s.tab}`} title={s.title} sub={s.description} />
      <Sections sections={top} />
      <div className="mt-10">
        <Checklist title="준비 체크리스트" items={s.checklist} />
      </div>
      <Cta service={s} compact />
      <div className="mt-10">
        <Sections sections={bottom} />
      </div>
      <Faq items={s.faq} />

      <section className="mt-10">
        <h2 className="text-lg font-bold">함께 보면 좋은 탭</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-3">
          {related.map((o) => (
            <li key={o.slug}>
              <Link href={`/${o.slug}`} className="block h-full rounded-xl border border-slate-200 p-3 text-sm hover:border-teal-600">
                <span className="block text-xs font-semibold text-teal-700">{o.tab}</span>
                <span className="mt-1 block text-slate-800">{o.short}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Cta service={s} />
    </>
  );
}
