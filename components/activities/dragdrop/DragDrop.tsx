export default function DragDrop({ activity }: { activity: any }) {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold">Drag & Drop Activity</h2>
      <pre className="text-xs bg-gray-100 p-2 mt-2">{JSON.stringify(activity, null, 2)}</pre>
    </div>
  );
}
