// /lib/user-access.ts
import type { IncomingMessage } from 'http';
import type { Tier, Role } from './access';

type ReqLike = IncomingMessage & { user?: any; cookies?: Record<string, string> };

function normTier(v?: string): Tier | undefined {
  v = v?.toLowerCase();
  return v === 'free' || v === 'premium' || v === 'org' ? (v as Tier) : undefined;
}
function normRole(v?: string): Role | undefined {
  v = v?.toLowerCase();
  return v === 'parent' || v === 'instructor' || v === 'org_admin' ? (v as Role) : undefined;
}

export function getTierAndRoleFromReq(req?: ReqLike): { tier: Tier; role: Role } {
  const cookieTier = normTier(req?.cookies?.forceTier);
  const cookieRole = normRole(req?.cookies?.forceRole);

  const realTier = (req as any)?.user?.entitlement?.tier as Tier | undefined;
  const realRole = (req as any)?.user?.entitlement?.role as Role | undefined;

  return {
    tier: cookieTier ?? realTier ?? 'free',
    role: cookieRole ?? realRole ?? 'parent',
  };
}
