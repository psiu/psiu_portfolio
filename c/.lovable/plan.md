## Build plan — Patrick Siu portfolio

Single-page portfolio using the selected "Engineering whiteboard" direction (calm blue accent on near-white, Inter + JetBrains Mono, generous whitespace, subtle fade-up motion).

### Sections (in order)
1. **Sticky nav** — `PATRICK_SIU // 25.YR.LEADER` + links to Stories, Timeline, Contact
2. **Hero** — oversized headline "Architecting intelligence at scale.", 25-year tagline
3. **About** — short paragraph block under a `(01) About` rule (new section the prototype didn't include but you asked for)
4. **Featured Stories `(02)`** — all **4** stories, alternating left/right image layout:
   - Zero-to-one financial crimes case investigation platform
   - Petabyte-scale data compliance scanning (Congressional Hearings defense)
   - Coordinated Inauthentic Behavior bot detection (anti-spam analytics)
   - C-level executive analytics consulting
   Each story: kicker, title, narrative paragraph, and two metric tiles (Approach / Impact, or Scale / Outcome).
5. **Core Stack `(03)`** — 4 columns: Storage, Processing, Orchestration, Intelligence/LLM
6. **Timeline `(04)`** — vertical career timeline (3–4 roles)
7. **Contact footer** — email + LinkedIn / GitHub / Resume links

### Design tokens (ported verbatim into `src/styles.css`)
- `--background: hsl(210 20% 98%)` (converted to oklch equivalents)
- `--foreground: hsl(215 25% 12%)`
- `--muted: hsl(215 15% 45%)`
- `--primary: hsl(215 90% 45%)` (calm engineering blue)
- `--border: hsl(215 25% 12% / 0.08)`
- Fonts: Inter (display, 400/800) and JetBrains Mono (mono, 400) loaded via Google Fonts in `__root.tsx`
- `fade-up` keyframe animation utility

### Images
Generate 4 abstract images (one per story) via `imagegen` and save under `src/assets/`:
- Story 1: clean network nodes / financial graph
- Story 2: vertical data filters at scale
- Story 3: dense traffic mesh resolving into clean patterns
- Story 4: minimal executive dashboard abstract

### Routing & files
- Single route: replace placeholder `src/routes/index.tsx`
- Add `head()` metadata: title "Patrick Siu — Data Engineering Leader", description, og tags, og:image (story 1 hero)
- Update `__root.tsx` head to include Google Fonts preconnect + stylesheet link
- Extract small components into `src/components/portfolio/` (Hero, About, StoryCard, Stack, Timeline, ContactFooter) for clean structure

### Technical notes
- TanStack Start file-based route, no react-router-dom
- All colors use semantic tokens from `src/styles.css` (oklch) — no hardcoded hex in components
- Animations use the CSS `fade-up` utility from styles.css (no JS motion lib needed)
- Fully responsive: mobile collapses two-column story rows to single column

After build, verify the index page renders cleanly and replaces the placeholder.