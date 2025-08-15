export default function Pricing() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Pricing</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border p-6"><h2 className="font-semibold">Free</h2><p>First 3 lessons per course.</p></div>
        <div className="rounded-2xl border p-6 ring-2 ring-black">
          <h2 className="font-semibold">Premium</h2><p>Full access to everything.</p>
          <button className="btn mt-4 px-4 py-2 rounded-xl bg-black text-white"
            onClick={async () => { const r = await fetch('/api/dev/simulate-upgrade', { method: 'POST' }); if (r.ok) location.href = '/map'; }}>
            Simulate upgrade (dev)
          </button>
        </div>
      </div>
    </main>
  );
}
