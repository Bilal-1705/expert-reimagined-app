import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for /services/* — the page body lives in services.index.tsx,
// detail pages in services.*.tsx.
export const Route = createFileRoute("/services")({
  component: () => <Outlet />,
});
