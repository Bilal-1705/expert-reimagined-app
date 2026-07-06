/**
 * Interactive map centered on the cabinet at 29 bis rue du Poumpidou, Juvignac.
 * Uses OpenStreetMap embed — no API key required. A subtle color treatment
 * aligns the map with the site palette (paper + ink) while remaining readable.
 */
export function CabinetMap({
  className = "",
  height = 460,
}: {
  className?: string;
  height?: number;
}) {
  const lat = 43.6191;
  const lon = 3.8022;
  const d = 0.006;
  const bbox = `${lon - d}%2C${lat - d}%2C${lon + d}%2C${lat + d}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
  const link = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}`;

  return (
    <figure className={`relative overflow-hidden border border-ink/10 bg-paper-dark rounded-sm ${className}`}>
      <iframe
        title="Localisation du cabinet Erkilic à Juvignac"
        src={src}
        loading="lazy"
        style={{
          height,
          width: "100%",
          border: 0,
          // Warm sepia tint + muted saturation to align with the paper/ink palette.
          filter: "sepia(0.35) saturate(0.75) hue-rotate(-8deg) brightness(1.02) contrast(0.96)",
        }}
      />
      <figcaption className="absolute bottom-3 right-3 bg-paper/95 backdrop-blur px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg rounded-sm">
        <span className="block text-ink">Cabinet Erkilic</span>
        <span className="block normal-case tracking-normal text-ink/60 mt-1 font-normal text-xs">
          29 bis rue du Poumpidou, 34990 Juvignac
        </span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-ink underline"
        >
          Itinéraire →
        </a>
      </figcaption>
    </figure>
  );
}
