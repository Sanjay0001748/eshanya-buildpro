# Eshanya BuildPro website

A static, single-page site. Everything is in `index.html`; there is no build step.

## Deploy to Vercel

### Option A: through GitHub
1. Create a new GitHub repository and push this folder:
   ```
   git init
   git add .
   git commit -m "Eshanya BuildPro website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. On vercel.com choose "Add New > Project" and import the repository.
3. Framework Preset: "Other". Leave Build Command and Output Directory empty.
4. Select Deploy.

### Option B: Vercel CLI
```
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

## Notes
- The 3D scenes load Three.js r128 from cdnjs, so visitors need an internet connection (they will have one on a live site).
- The enquiry form does not post to a server. It prepares a WhatsApp or email message for the visitor to send.
- Project photos are in `images/`. Keep that folder next to `index.html`.
- Replace the placeholder notes (project name and location, qualifications) before going live.
