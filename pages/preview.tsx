import ActivityRenderer from '@/components/activities/ActivityRenderer';
export default function Preview() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Preview</h1>
      <div className="grid gap-6">
        <ActivityRenderer activityId="act-quiz-1" />
        <ActivityRenderer activityId="act-drag-1" />
        <ActivityRenderer activityId="act-iframe-1" />
      </div>
    </main>
  );
}
