import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const isProtectedRoute = createRouteMatcher(["/protected(.*)"]);

export const onRequest = clerkMiddleware((auth, context) => {
  const { userId, redirectToSignIn } = auth();
  if (!userId && isProtectedRoute(context.request)) {
    return redirectToSignIn();
  }
});