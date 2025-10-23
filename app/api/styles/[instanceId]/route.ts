import { styleByInstanceId } from "@/app/login/se-bankid/[instanceId]/style.css";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/styles/[instanceId]">,
) {
  const { instanceId } = await ctx.params;
  const css = styleByInstanceId(instanceId);

  return new NextResponse(css, {
    headers: { "Content-Type": "text/css" },
  });
}
