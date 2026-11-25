import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-2xl font-bold">페이지를 찾을 수 없어요</h1>
      <p className="mt-3 text-slate-600">주소가 바뀌었거나 없는 페이지입니다.</p>
      <Link href="/" className="mt-6 inline-block rounded-lg bg-teal-700 px-4 py-2 text-white">홈으로</Link>
    </div>
  );
}
