/* ============================================
   Theme: Editorial & Organic
   ============================================ */

:root {
    /* Light Theme (Paper & Ink) */
    --bg: #F5F4F1;           /* Warm paper */
    --text-main: #2A2A28;    /* Soft charcoal ink */
    --text-muted: #6B6A65;
    --border: #D8D6D0;
    --accent: #B24C3B;       /* Muted terracotta */
    --accent-bg: #EAE6DF;
}

[data-theme="dark"] {
    /* Dark Theme (Slate & Chalk) */
    --bg: #1A1A19;           
    --text-main: #EAE8E3;    /* Chalky off-white */
    --text-muted: #9E9C98;
    --border: #3A3A38;
    --accent: #D98877;       
    --accent-bg: #2A2A28;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    font-family: 'DM Sans', sans-serif;
    background-color: var(--bg);
    color: var(--text-main);
    line-height: 1.6;
    transition: background-color 0.4s ease, color 0.4s ease;
    -webkit-font-smoothing: antialiased;
}

/* Subtle physical texture overlay to make it feel "real" */
.texture-overlay {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    pointer-events: none;
    z-index: 999;
    opacity: 0.4;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    mix-blend-mode: multiply;
}
[data-theme="dark"] .texture-overlay { opacity: 0.15; mix-blend-mode: overlay; }

.page-container {
    max-width: 760px;
    margin: 0 auto;
    padding: 48px 24px 80px;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
}
.brand {
    font-family: 'Newsreader', serif;
    font-weight: 600;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
}
.header-actions {
    display: flex;
    align-items: center;
    gap: 20px;
}
.icon-btn {
    background: none; border: none;
    color: var(--text-main);
    cursor: pointer;
    display: flex; align-items: center;
    transition: color 0.2s;
}
.icon-btn:hover { color: var(--accent); }
.text-link {
    color: var(--text-main);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s, color 0.2s;
}
.text-link:hover { border-color: var(--text-main); }

/* Typography Focus Intro */
.intro { margin-bottom: 80px; }
.greeting {
    font-size: 1rem;
    color: var(--text-muted);
    margin-bottom: 16px;
}
.handle { font-family: 'DM Mono', monospace; font-size: 0.9em; }
.manifesto {
    font-family: 'Newsreader', serif;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 500;
    line-height: 1.15;
    letter-spacing: -0.03em;
    margin-bottom: 24px;
}
.manifesto em {
    font-style: italic;
    color: var(--accent);
}
.bio {
    font-size: 1.1rem;
    color: var(--text-muted);
    max-width: 600px;
}

/* Section Styling */
.section-title {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
    margin-top: 64px;
}
.section-title h2 {
    font-family: 'Newsreader', serif;
    font-weight: 500;
    font-size: 1.5rem;
    font-style: italic;
}
.line {
    flex: 1;
    height: 1px;
    background-color: var(--border);
}

/* Project List (Replacing rigid cards with flowing lists) */
.project-list {
    display: flex;
    flex-direction: column;
}
.project-item {
    padding: 32px 0;
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.project-item:last-child { border-bottom: none; }

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 12px;
}
.project-title {
    font-family: 'Newsreader', serif;
    font-weight: 600;
    font-size: 1.4rem;
    color: var(--text-main);
    display: flex;
    align-items: center;
    gap: 8px;
}
.project-title .material-icons-round {
    font-size: 1.2rem;
    color: var(--text-muted);
}
.project-desc {
    font-size: 1rem;
    color: var(--text-muted);
    max-width: 650px;
}

/* Tags */
.tags {
    display: flex; gap: 8px; flex-wrap: wrap; margin-top: 4px;
}
.tag {
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 4px;
    background: var(--accent-bg);
    color: var(--text-main);
}

/* Links */
.project-links {
    display: flex; gap: 16px; margin-top: 8px;
}
.project-links a {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-main);
    text-decoration: none;
    display: flex; align-items: center; gap: 4px;
    border-bottom: 1px solid var(--border);
    padding-bottom: 2px;
    transition: border-color 0.2s, color 0.2s;
}
.project-links a:hover {
    color: var(--accent);
    border-color: var(--accent);
}
.project-links .material-icons-round { font-size: 14px; }

/* Footer */
.footer {
    margin-top: 80px;
    padding-top: 32px;
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    color: var(--text-muted);
}
.manifesto-mini { font-style: italic; font-family: 'Newsreader', serif; }

@media (max-width: 600px) {
    .manifesto { font-size: 2.2rem; }
    .footer { flex-direction: column; gap: 8px; }
}
