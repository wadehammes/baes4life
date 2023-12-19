import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const nextPage = NextResponse.next();
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/rsvp")) {
    return NextResponse.redirect(
      "https://www.zola.com/wedding/jenandwade/rsvp"
    );
  }

  return nextPage;
}
