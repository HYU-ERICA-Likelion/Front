export default function Photo({ params }: { params: { id: string } }) {
  return <div>This is photo/id {params.id}</div>;
}
