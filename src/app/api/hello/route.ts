import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/hello
 * GET /api/hello?name=CodeBuddy
 */
export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name") ?? "world";

  return NextResponse.json({
    code: 0,
    message: "ok",
    data: {
      greeting: `Hello, ${name}!`,
      timestamp: new Date().toISOString(),
    },
  });
}

/**
 * POST /api/hello
 * body: { "name": "xxx" }
 */
export async function POST(request: NextRequest) {
  let name = "world";
  try {
    const body = (await request.json()) as { name?: string };
    if (typeof body?.name === "string" && body.name.trim()) {
      name = body.name.trim();
    }
  } catch {
    // 忽略 body 解析失败，使用默认值
  }

  return NextResponse.json({
    code: 0,
    message: "ok",
    data: {
      greeting: `Hello, ${name}!`,
      timestamp: new Date().toISOString(),
    },
  });
}
