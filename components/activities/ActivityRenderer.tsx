// /components/activities/ActivityRenderer.tsx
import dynamic from 'next/dynamic';

const Quiz = dynamic(() => import('./quiz/Quiz'), { ssr: false });
const DragDrop = dynamic(() => import('./dragdrop/DragDrop'), { ssr: false });
const IFrame = dynamic(() => import('./iframe/IFrame'), { ssr: false });

/**
 * Client-only renderer. It receives the already-loaded activity config as a prop.
 * DO NOT import server-only loaders (fs/path) in here.
 */
export default function ActivityRenderer({ cfg }: { cfg: any }) {
  if (!cfg) return <div>Activity not found</div>;
  if (cfg.type === 'quiz') return <Quiz activity={cfg} />;
  if (cfg.type === 'dragdrop') return <DragDrop activity={cfg} />;
  if (cfg.type === 'iframe') return <IFrame activity={cfg} />;
  return <div>Unknown activity type</div>;
}
