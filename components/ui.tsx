import Link from "next/link";
import type { Section } from "@/data/services";

export function PageTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <header className="mb-8">
      {kicker ? <p className="text-xs font-semibold tracking-wider text-teal-700">{kicker}</p> : null}
      <h1 className="mt-2 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">{title}</h1>
      {sub ? <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600">{sub}</p> : null}
    </header>
  );
}

export function Breadcrumb({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="경로" className="mb-4 text-xs text-slate-500">
      {items.map((it, i) => (
        <span key={i}>
          {i > 0 ? <span className="mx-1">›</span> : null}
          {it.href ? <Link href={it.href} className="hover:text-teal-700">{it.label}</Link> : <span>{it.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function Sections({ sections }: { sections: Section[] }) {
  return (
    <div className="space-y-10">
      {sections.map((s) => (
        <section key={s.h}>
          <h2 className="text-lg font-bold text-slate-900">{s.h}</h2>
          {s.p?.map((t, i) => (
            <p key={i} className="mt-3 text-[15px] leading-7 text-slate-700">{t}</p>
          ))}
          {s.list ? (
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-7 text-slate-700">
              {s.list.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          ) : null}
          {s.steps ? (
            <ol className="mt-3 space-y-2">
              {s.steps.map((t, i) => (
                <li key={t} className="flex gap-3 text-[15px] leading-7 text-slate-700">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">{i + 1}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          ) : null}
          {s.table ? <Table head={s.table.head} rows={s.table.rows} /> : null}
        </section>
      ))}
    </div>
  );
}

export function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {items.map((t) => (
          <li key={t} className="flex gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm leading-6 text-slate-700">
            <span aria-hidden className="text-teal-700">☐</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[480px] text-sm">
        <thead className="bg-slate-50">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-3 py-2 text-left font-semibold text-slate-700">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-slate-100 align-top">
              {r.map((c, j) => (
                <td key={j} className={`px-3 py-2 leading-6 ${j === 0 ? "whitespace-nowrap font-medium text-slate-900" : "text-slate-700"}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold text-slate-900">자주 묻는 질문</h2>
      <div className="mt-3 divide-y divide-slate-200 rounded-xl border border-slate-200">
        {items.map((f) => (
          <details key={f.q} className="group px-4 py-3">
            <summary className="cursor-pointer text-[15px] font-semibold text-slate-800">{f.q}</summary>
            <p className="mt-2 text-sm leading-6 text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
