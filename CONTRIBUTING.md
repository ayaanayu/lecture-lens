# Contributing to LectureLens

Thanks for considering contributing to LectureLens.

## Development setup

1. Install Node.js 22 or a compatible supported version.
2. Clone the repository.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Copy `.env.example` to `.env` if you need to configure an API:
   ```bash
   cp .env.example .env
   ```
5. Start the local development server:
   ```bash
   npm run dev
   ```

## Before opening a pull request

Run the production build:

```bash
npm run build
```

Please keep changes focused, avoid committing secrets or local environment files, and describe any UI or behavior changes in your pull request.

## Project scope

LectureLens currently includes frontend demo/local behavior. Do not assume that UI screens are backed by production APIs, authentication, or secure cloud storage unless those integrations are explicitly implemented and documented.
