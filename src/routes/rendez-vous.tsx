import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PROFILES, ProfileFunnel, type ProfileId } from "@/components/site/ProfileFunnel";

const SITE = "https://erkilic.fr";

export const Route = createFileRoute("/rendez-vous")({
  validateSearch: (search: Record<string, unknown>): { profil?: ProfileId } => {
    const p = search.profil;
    return PROFILES.some((x) => x.id === p) ? { profil: p as ProfileId } : {};
  },
  head: () => ({
    meta: [
      { title: "Prendre rendez-vous avec un expert-comptable | Erkilic" },
      {
        name: "description",
        content:
          "Réservez votre premier rendez-vous gratuit avec le cabinet Erkilic, expert-comptable à Juvignac près de Montpellier. Créneau en ligne en 1 minute.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/rendez-vous` }],
  }),
  component: RendezVous,
});

function RendezVous() {
  const { profil } = Route.useSearch();
  return (
    <div className="min-h-screen bg-paper text-ink font-manrope">
      <Nav />
      <main>
        <ProfileFunnel
          profile={profil}
          title="Votre premier rendez-vous, offert."
          intro="Dites-nous en deux clics qui vous êtes et ce dont vous avez besoin : l'experte-comptable prépare l'échange avant de vous appeler."
        />
      </main>
      <Footer />
    </div>
  );
}
