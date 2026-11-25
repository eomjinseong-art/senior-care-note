"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GROUPS, services } from "@/data/services";

/** 6개 탭(세부 페이지) 바로가기. 모든 페이지 상단에 표시됩니다. */
export function Tabs() {
  const pathname = usePathname();
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <nav aria-label="서비스 탭" className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 py-2">
        {(["family", "career"] as const).map((g, gi) => (
          <div key={g} className="flex shrink-0 items-center gap-2">
            {gi > 0 ? <span aria-hidden className="mx-1 h-5 w-px bg-slate-300" /> : null}
            <span className="shrink-0 text-[11px] font-semibold text-slate-500">{GROUPS[g].title}</span>
            {services
              .filter((s) => s.group === g)
              .map((s) => {
                const active = pathname === `/${s.slug}`;
                return (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={`shrink-0 rounded-full border px-3 py-1 text-xs ${active ? "border-teal-700 bg-teal-700 font-semibold text-white" : "border-slate-300 bg-white text-slate-700 hover:border-teal-600 hover:text-teal-700"}`}
                  >
                    {s.tab}
                  </Link>
                );
              })}
          </div>
        ))}
      </nav>
    </div>
  );
}
