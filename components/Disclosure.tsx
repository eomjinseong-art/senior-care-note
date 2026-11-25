import { AD_DISCLOSURE } from "@/lib/site";

export function Disclosure() {
  return (
    <div className="border-b border-amber-200 bg-amber-50">
      <p className="mx-auto max-w-5xl px-4 py-2 text-[12px] leading-5 text-amber-900">
        <span className="mr-1 font-semibold">[광고 안내]</span>
        {AD_DISCLOSURE}
      </p>
    </div>
  );
}
