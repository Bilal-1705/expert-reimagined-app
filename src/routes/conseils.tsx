import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/conseils")({
  beforeLoad: () => {
    throw redirect({ to: "/actualites", replace: true });
  },
});
