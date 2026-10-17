# Own and host LectureLens without Base44

The runnable app in `src/` does not import the Base44 SDK or require a Base44 account. The files in `source-notes/original-bundles/` are archived copies of the pasted source material only; they are not imported into the app build.

## Recommended free starting setup

- **Source-code ownership:** create a GitHub repository in your own account and push this folder. Keep the repository private if you do not want to publish the source.
- **Website hosting:** use [Cloudflare Pages](https://pages.cloudflare.com/) and connect your GitHub repository. Cloudflare's official React/Vite guide documents this workflow: https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/.
- **Build settings:** framework preset `Vite` (or `None`), build command `npm run build`, output directory `dist`.
- **SPA routes:** `public/_redirects` sends app routes back to `index.html`.
- **Backend/database/authentication (optional):** [Supabase](https://supabase.com/pricing) has a free tier for prototyping. Create your own Supabase project and configure security policies before putting private user data there. The current app does not yet use Supabase's SDK or automatically create its tables/auth flows.

Free tiers have quotas and terms that can change. A free subdomain is generally provided by the host; a custom domain may cost money.

## Deploy steps

1. Create a GitHub account if you do not already have one, then create a repository named `lecturelens` under the account.
2. Upload/push the contents of this project folder to that repository. Do not upload `.env` or secrets.
3. Create a Cloudflare account and open **Workers & Pages → Create → Pages → Connect to Git** (labels may vary).
4. Select your repository. Set build command to `npm run build` and build output directory to `dist`; deploy.
5. Use the `*.pages.dev` URL provided by Cloudflare to test the app.
6. To connect your own API later, set `VITE_API_BASE_URL` in the Pages project environment variables to your API's HTTPS base URL and redeploy.

## What is and is not under your control

You own the repository and the code you put in it. Cloudflare and Supabase remain third-party hosted services, each subject to its own terms and free-tier limits. To control the hosting infrastructure too, you would need to run the services on infrastructure you administer.

The current frontend's local demo data is stored in the browser. The API helper currently attempts only these backend endpoints when `VITE_API_BASE_URL` is configured:

- `POST /api/v1/compiler/run`
- `POST /api/v1/attendance/checkin`
- `POST /api/v1/health/log`

Hosting the frontend does not create these endpoints. They need a backend implementation. The app does not yet have production authentication, server-side database persistence, a secure compiler sandbox, realtime multi-user study rooms, or a configured maps/doctors provider. Do not use demo mode for real health or attendance records.
