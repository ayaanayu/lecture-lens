# LectureLens — AI Study Companion

A clean React + Vite frontend reconstructed from the LectureLens source bundles you supplied. It includes the main study workflows and local-first fallback behavior so the UI remains usable without a configured backend.

## Run locally

1. Install Node.js 18 or newer.
2. In this folder, run `npm install`.
3. Run `npm run dev`.
4. Open the local URL printed by Vite.

Build for deployment with `npm run build`; the static site is emitted to `dist/`.

## Included

- Overview dashboard and progress snapshots
- Lecture library with add/search and lecture detail view
- Practice quiz with one question at a time and difficulty feedback
- Flashcards with flip and Easy / Good / Hard ratings
- Mission planner with tasks and completion progress
- Concept map, syllabus/rubrics, activity history
- Virtual labs and a multi-language compiler interface
- Attendance check-in using browser geolocation when permission is granted
- Private health log with emergency keyword safety panel
- Virtual study room with Pomodoro timer, shared-note canvas and chat mock
- Confusion radar

## Own and deploy the app

The runnable app has no Base44 SDK dependency. You can own the source in your own GitHub repository and host the Vite build on a free static-hosting tier. See [`FREE_HOSTING_AND_OWNERSHIP.md`](./FREE_HOSTING_AND_OWNERSHIP.md) for setup steps for Cloudflare Pages and notes on an optional Supabase backend. The archived files under `source-notes/original-bundles/` are historical source bundles and are not part of the runnable app.

## Backend integration

The frontend works in local demo mode and stores demo content in browser local storage. For production data/authentication, configure `VITE_API_BASE_URL` and implement the endpoints in `src/api.js` to match your backend. The app attempts these routes when a base URL is configured:

- `POST /api/v1/compiler/run`
- `POST /api/v1/attendance/checkin`
- `POST /api/v1/health/log`

No backend server, database, authentication provider, compiler sandbox, Google Maps key, or doctor/hospital directory credentials were included in the supplied text bundles. Those services cannot be made live by frontend packaging alone. The current compiler fallback is explicitly a demo response, not secure code execution. Do not deploy health/attendance data to a public server without authentication, access controls, consent, retention policy, and transport security.

## Project notes

The uploaded text was pasted as concatenated bundles rather than a clean repository. This package preserves the requested product direction in a consistent, buildable frontend rather than pretending every referenced original component or backend service was present. `source-notes/` contains a short reconstruction note; the five original uploads remain available in the conversation.
