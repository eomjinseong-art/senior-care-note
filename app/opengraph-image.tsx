import { ImageResponse } from "next/og";

export const alt = '시니어 정리·돌봄 노트';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const text = '시니어 정리·돌봄 노트고독사 특수청소 · 유품정리 · 돌봄 직업 가이드';
  const font = await fetch(`https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&text=${encodeURIComponent(text)}`)
    .then((r) => r.text())
    .then((css) => css.match(/src: url\((.+?)\)/)?.[1])
    .then((url) => (url ? fetch(url).then((r) => r.arrayBuffer()) : null))
    .catch(() => null);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: '#0F172A', color: '#F8FAFC', padding: "72px", fontFamily: "NotoKR" }}>
        <div style={{ color: '#38BDF8', fontSize: 28, letterSpacing: 6 }}>SENIOR CARE NOTE</div>
        <div style={{ marginTop: 24, fontSize: 76, color: '#F8FAFC' }}>시니어 정리·돌봄 노트</div>
        <div style={{ marginTop: 20, fontSize: 30, color: '#94A3B8' }}>고독사 특수청소 · 유품정리 · 돌봄 직업 가이드</div>
      </div>
    ),
    { ...size, fonts: font ? [{ name: "NotoKR", data: font, weight: 700 }] : [] },
  );
}
