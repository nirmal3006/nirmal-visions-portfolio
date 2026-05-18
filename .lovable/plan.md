## Goal
Wire the Contact form to EmailJS so submissions send directly via EmailJS (no mail client redirect).

## Changes

1. **Install dependency**
   - Add `@emailjs/browser`.

2. **Update `src/components/portfolio/Contact.tsx`**
   - Import `emailjs` from `@emailjs/browser`.
   - Replace the current `mailto:` flow in `handleSubmit` with `emailjs.send(...)` using:
     - Service ID: `service_uknoew8`
     - Template ID: `template_4s68zyc`
     - Public Key: `nwnwK8c61u6MfQzdI`
   - Send template params: `{ name, email, message, title: "Portfolio contact from <name>" }` (standard EmailJS template vars; adjust if your template uses different names).
   - On success: toast "Message sent!", reset form.
   - On error: toast destructive "Failed to send. Please try again."
   - Keep existing UI, validation, and `sending` state.

## Notes
- EmailJS public key is safe to ship in client code (that's its intended use).
- If your EmailJS template uses different variable names (e.g. `from_name`, `reply_to`), let me know and I'll match them exactly.
