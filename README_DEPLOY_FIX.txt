WHY THIS VERSION FIXES DEPLOYMENT

Previous deployment failed because old repository files still existed, especially package-lock.json with an internal registry URL. GitHub web upload adds/replaces files but does not automatically remove old files that are missing from the new ZIP.

This version is full source code, not the compressed zero-npm version.
It includes:
- Full React UI under client/src
- Full Express backend under server/src
- Modern edu UI pages
- Backend mock API routes
- npm public registry config
- Node 20 version files

Use npm install --no-package-lock in Vercel/Render to prevent generating/using a lock file during deployment.
