/**
 * Callback requests ("être rappelé") from the booking funnel.
 *
 * Set WEB3FORMS_ACCESS_KEY to the key created on web3forms.com for
 * cabinet@erkilic.fr: requests are then e-mailed to the cabinet without
 * leaving the page. While it is empty, the form falls back to opening a
 * pre-filled e-mail in the visitor's mail app.
 */
export const WEB3FORMS_ACCESS_KEY = "";
export const CABINET_EMAIL = "cabinet@erkilic.fr";

export type CallbackRequest = {
  name: string;
  phone: string;
  email: string;
  slot: string;
  message: string;
  summary: string;
  page: string;
};

function body(r: CallbackRequest) {
  return [
    `Nom : ${r.name}`,
    `Téléphone : ${r.phone}`,
    r.email && `E-mail : ${r.email}`,
    `Créneau de rappel : ${r.slot}`,
    `Profil et besoin : ${r.summary}`,
    r.message && `Message : ${r.message}`,
    `Page : https://erkilic.fr${r.page}`,
  ]
    .filter(Boolean)
    .join("\n");
}

/** Returns "sent" when delivered by Web3Forms, "mailto" when handed to the mail app. */
export async function sendCallbackRequest(r: CallbackRequest): Promise<"sent" | "mailto"> {
  const subject = `Demande de rappel : ${r.name}`;
  if (WEB3FORMS_ACCESS_KEY) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject,
        from_name: "Site erkilic.fr",
        replyto: r.email || undefined,
        message: body(r),
      }),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: boolean };
    if (!res.ok || !json.success) throw new Error("Envoi impossible");
    return "sent";
  }
  window.location.href = `mailto:${CABINET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body(r))}`;
  return "mailto";
}
