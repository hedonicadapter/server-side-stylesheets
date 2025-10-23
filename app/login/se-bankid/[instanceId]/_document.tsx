import { Html, Head, Main, NextScript } from "next/document";

interface Props {
  params: Promise<{ instanceId: string }>;
}

export default async function Document({ params }: Props) {
  const { instanceId } = await params;
  console.log(instanceId);
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href={`/api/styles/${instanceId}`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// export default function Page({ params }: Props) {
//   const css = styleByInstanceId(params.instanceId);
//
//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: css }} />
//       <div
//         style={{
//           backgroundColor: "var(--bg)",
//           color: "var(--fg)",
//           height: "100vh",
//         }}
//       >
//         <h1>instanceId: {params.instanceId}</h1>
//       </div>
//     </>
//   );
// }
