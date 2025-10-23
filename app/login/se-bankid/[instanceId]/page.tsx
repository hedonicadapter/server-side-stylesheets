interface Props {
  params: Promise<{ instanceId: string }>;
}
export default async function Page({ params }: Props) {
  const { instanceId } = await params;
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--bg)",
          color: "var(--fg)",
          height: "100vh",
        }}
      >
        <h1>instanceId: {instanceId}</h1>
      </div>
    </>
  );
}
