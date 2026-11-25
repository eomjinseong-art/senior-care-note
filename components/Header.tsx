"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { VisitorCounter } from "@/components/VisitorCounter";
import { NAV, SITE_NAME } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span aria-hidden className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700 text-sm font-bold text-white">돌</span>
          <span className="text-base font-bold text-slate-900">{SITE_NAME}</span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-5 md:flex">
          {NAV.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`text-sm ${active ? "font-semibold text-teal-700" : "text-slate-600 hover:text-slate-900"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <VisitorCounter />
          <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded border border-slate-300 md:hidden" aria-expanded={open} aria-label={open ? "메뉴 닫기" : "메뉴 열기"} onClick={() => setOpen((v) => !v)}>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="grid grid-cols-2 gap-2 border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-2 py-2 text-sm text-slate-800 hover:bg-teal-50" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
