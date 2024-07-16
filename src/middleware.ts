import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { hostname } = new URL(request.url);

  if (hostname === "admin.knowhance.com") {
    url.pathname = `/admin${url.pathname}`;
  } else if (hostname === "app.knowhance.com") {
    url.pathname = `/app${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}
