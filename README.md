# Aspire Education website

Marketing site for Aspire Education (Calgary), powered by AV Ventures.

- **Framework:** Next.js, exported as a static site
- **Hosting (demo):** GitHub Pages, deployed automatically on every push to `main`
- **Forms:** the consultation form saves to a Supabase `leads` table

## Editing content

All copy, contact details and program cards are in [`src/content/site.ts`](src/content/site.ts).
Anything in `[brackets]` is a placeholder waiting on the client. Images are in `src/assets/`.

## Run locally

```bash
npm install
cp .env.example .env.local   # add the Supabase URL and publishable key
npm run dev                  # http://localhost:3000
```

`npm run build` writes the static site to `out/`, and `npm run preview` serves it.

## Supabase

The form inserts into `public.leads` (see `supabase/migrations/`). Visitors can only
insert rows; nobody can read leads with the public key. Every lead is tagged with
`site = 'aspire-education'`, so one Supabase project can collect leads from several sites.

To see leads, open the Supabase dashboard → Table Editor → `leads` and filter by `site`.

The URL and publishable key in `.env.production` are browser-safe values meant to be public.
Never put a secret or service-role key in this repo.

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.
In the repo settings, Pages → Source must be set to **GitHub Actions**.

The site is served at https://aspireedu.ca (custom domain set in Settings → Pages).
DNS at GoDaddy: four A records on `@` to GitHub Pages (185.199.108–111.153) and
`www` as a CNAME to `miker888.github.io`.
