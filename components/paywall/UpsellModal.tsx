import { useRouter } from 'next/router';

export default function UpsellModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  const router = useRouter();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" role="dialog" aria-modal="true">
      <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 w-full max-w-md shadow-xl">
        <h2 className="text-xl font-semibold mb-2">Go Premium</h2>
        <p className="text-sm opacity-80 mb-4">Unlock all lessons and activities.</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl bg-black text-white" onClick={() => router.push('/pricing')}>View Plans</button>
          <button className="px-4 py-2 rounded-xl border" onClick={onClose} aria-label="Dismiss">Continue Preview</button>
        </div>
      </div>
    </div>
  );
}
