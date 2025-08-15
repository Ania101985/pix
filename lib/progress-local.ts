const KEY = 'progress:v1';
type LocalState = { resume?: Record<string, { lastActivityIndex: number }>; coins?: number };

function read(): LocalState { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; } }
function write(s: LocalState) { localStorage.setItem(KEY, JSON.stringify(s)); }

export function getResume(lessonId: string) { return read().resume?.[lessonId] || { lastActivityIndex: 0 }; }
export function setResume(lessonId: string, lastActivityIndex: number) {
  const s = read(); s.resume = s.resume || {}; s.resume[lessonId] = { lastActivityIndex }; write(s);
}
export function addCoinsLocal(n: number) { const s = read(); s.coins = (s.coins || 0) + n; write(s); return s.coins!; }
