/**
 * Interactive map centered on the cabinet at 29 bis rue du Poumpidou, Juvignac.
 * Uses the Google Maps embed (no API key required for the public /maps embed).
 */
export function CabinetMap({
  className = "",
  height = 460,
}: {
  className?: string;
  height?: number;
}) {
  const query = encodeURIComponent("Cabinet Erkilic, 29 bis rue du Poumpidou, 34990 Juvignac");
  const src = `https://www.google.com/maps?q=${query}&hl=fr&z=16&output=embed`;
  const link = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <figure className={`relative overflow-hidden border border-ink/10 bg-paper-dark rounded-sm ${className}`}>
      <iframe
        title="Cabinet Erkilic — 29 bis rue du Poumpidou, Juvignac (Google Maps)"
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        style={{ height, width: "100%", border: 0 }}
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
          Ouvrir dans Google Maps →
        </a>
      </figcaption>
    </figure>
  );
}
