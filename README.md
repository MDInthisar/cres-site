## Client application

The client is a React 19 and Vite application using React Router DOM. Route
definitions are maintained in `src/App.tsx`; page components remain in
`src/routes/`.

```powershell
npm install
npm run dev
npm run build
npm run preview
```

Production output is written to `dist/`. Deploy it as a static SPA and configure
the host to serve `index.html` for application routes so direct visits and
refreshes on nested URLs continue to work.

The enquiry forms call the separate Express service at `/api/contact`. Set
`VITE_CONTACT_API_URL` to that service's base URL when building the client; the
existing development fallback is `http://localhost:5000`. Variables with the
`VITE_` prefix are included in browser code and must not contain secrets.

The Express service in `../backend/` remains necessary for contact submissions,
Google Sheets, email, and scheduled reports. Those functions are not part of
the static client and must be deployed with their server-side configuration.