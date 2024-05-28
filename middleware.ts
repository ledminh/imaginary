import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req) && !isPublicRoute(req)) auth().protect();
});

const isProtectedRoute = createRouteMatcher(["/"]);
const isPublicRoute = createRouteMatcher(["/api/webhooks/clerk"]);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
