import { useRouter } from 'next/router';

export default function Paywall() {
  const { query, push } = useRouter();
  const courseId = String(query.courseId || '');
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Unlock this course</h1>
      <p className="mb-4">You’ve reached the end of the free preview.</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border p-4">
          <h3 className="font-semibold">Free</h3>
          <ul className="list-disc ml-5 text-sm"><li>First 3 lessons per course</li></ul>
        </div>
        <div className="rounded-2xl border p-4 ring-2">
          <h3 className="font-semibold">Premium</h3>
          <ul className="list-disc ml-5 text-sm"><li>All lessons & activities</li></ul>
          <button className="mt-3 px-4 py-2 rounded-xl bg-black text-white"
            onClick={() => push(`/pricing?courseId=${courseId}`)}>Upgrade</button>
        </div>
      </div>
    </main>
  );
}
