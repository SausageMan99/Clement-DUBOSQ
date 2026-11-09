import { NextResponse, type NextRequest } from "next/server";

/** "/" → "/fr" for French-speaking browsers, "/en" for everyone else. Query string (e.g. ?for=) is kept. */
export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept-language") ?? "";
  const lang = /^fr\b/i.test(accept.trim()) ? "fr" : "en";
  const url = request.nextUrl.clone();
  url.pathname = `/${lang}`;
  return NextResponse.redirect(url, 307);
}

export const config = { matcher: ["/"] };
