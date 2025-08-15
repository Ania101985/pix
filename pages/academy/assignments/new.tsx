// /pages/academy/assignments/new.tsx
export default function NewAssignment() {
  return (<main className="max-w-3xl mx-auto p-6"><h1 className="text-2xl font-bold mb-4">New Assignment</h1>
    <form className="grid gap-3"><input className="border rounded-xl p-2" placeholder="Class ID" />
    <input className="border rounded-xl p-2" placeholder="Course ID" /><input className="border rounded-xl p-2" placeholder="Lesson ID" />
    <input className="border rounded-xl p-2" type="date" /><button className="px-4 py-2 rounded-xl bg-black text-white">Create</button></form></main>);
}
