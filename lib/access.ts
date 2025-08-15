export type Tier = 'free' | 'premium' | 'org';
export type Role = 'parent' | 'instructor' | 'org_admin' | undefined;

/** free: lessons 0..2; premium/org: all; instructor/org_admin: all */
export function canAccessLesson({ tier, role, lessonIndex }: {
  tier?: Tier; role?: Role; lessonIndex: number;
}) {
  if (role === 'instructor' || role === 'org_admin') return true;
  if (tier === 'premium' || tier === 'org') return true;
  return lessonIndex <= 2;
}
