export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full">
      <h1>Photo Layout</h1>
      {modal}
      <div className="px-2 py-10">{children}</div>
    </div>
  );
}
