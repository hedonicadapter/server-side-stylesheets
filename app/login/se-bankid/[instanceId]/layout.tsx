import { headers } from "next/headers";
import { ReactNode } from "react";

interface Props {
  params: Promise<{ instanceId: string }>;
  children: ReactNode;
}

const getBaseUrl = async () => {
  const headersList = await headers();
  const host = headersList.get("x-forwarded-host") || headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  return `${protocol}://${host}`;
};

export default async function Layout({ params, children }: Props) {
  const { instanceId } = await params;
  const baseUrl = await getBaseUrl();
  const res = await fetch(
    `${baseUrl}/api/styles/${instanceId}?v=${Date.now()}`,
  );
  const css = await res.text();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {children}
    </>
  );
}
