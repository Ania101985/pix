import { NextResponse } from 'next/server';
import { getCourses, getCourseMap } from '@/lib/content';

export async function GET() {
  const courses = getCourses();
  const example = getCourseMap('scratch');
  return NextResponse.json({ ok: true, courses, example });
}
