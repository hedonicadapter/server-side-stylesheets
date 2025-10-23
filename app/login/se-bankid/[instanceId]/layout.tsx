import { ReactNode } from "react";

interface Props {
  params: Promise<{ instanceId: string }>;
  children: ReactNode;
}

export default async function Layout({ params, children }: Props) {
  const { instanceId } = await params;
  return (
    <>
      <link
        rel="stylesheet"
        href={`/api/styles/${instanceId}`}
        precedence="default"
      />
      {children}
    </>
  );
}
