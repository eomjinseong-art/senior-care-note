import { Noto_Sans_KR } from "next/font/google";
import type { Metadata } from "next";
import { Disclosure } from "@/components/Disclosure";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Tabs } from "@/components/Tabs";
import { GOOGLE_SITE_VERIFICATION, NAVER_SITE_VERIFICATION } from "@/lib/config";
import { SITE_NAME, SITE_SUB, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";

const sans = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-noto-sans", weight: ["400", "500", "700"] });

const description = `${SITE_TAGLINE}. ${SITE_SUB}`;

const verification: Metadata["verification"] = {};
if (GOOGLE_SITE_VERIFICATION) verification.google = GOOGLE_SITE_VERIFICATION;
if (NAVER_SITE_VERIFICATION) verification.other = { "naver-site-verification": NAVER_SITE_VERIFICATION };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
  description,
  keywords: ["고독사 특수청소", "유품정리", "요양원 입소 후 집 정리", "철거 견적", "병원 동행 매니저", "노인돌봄 생활지원사", "시니어 돌봄", "부모님 집 정리"],
  openGraph: { type: "website", locale: "ko_KR", url: SITE_URL, siteName: SITE_NAME, title: SITE_NAME, description },
  twitter: { card: "summary", title: SITE_NAME, description },
  verification,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${sans.variable} min-h-screen bg-white font-sans text-slate-900 antialiased`}>
        <Disclosure />
        <Header />
        <Tabs />
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
