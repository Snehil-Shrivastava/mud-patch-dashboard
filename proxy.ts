import { auth as proxy } from "@/auth";
import { NextResponse } from "next/server";

export default proxy((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage =
    req.nextUrl.pathname.startsWith("/sign-in") ||
    req.nextUrl.pathname.startsWith("/sign-up");

  if (!isLoggedIn && !isAuthPage) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (isLoggedIn && isAuthPage) {
    return NextResponse.redirect(new URL("/post-use-collections", req.url));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg).*)"],
};
