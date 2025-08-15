export default function IFrame({ activity }: { activity: any }) {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold">Iframe Activity</h2>
      <iframe
        src={activity?.props?.src || 'https://example.com'}
        className="w-full h-64 border"
      />
    </div>
  );
}
