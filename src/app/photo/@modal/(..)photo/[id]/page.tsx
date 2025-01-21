export default function InterceptedModalPhotoId({
  params,
}: {
  params: { id: string };
}) {
  return <div>Intercepted Photo Id {params.id}</div>;
}
