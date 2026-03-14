/* ============================================
   gorupa.github.io — js/main.js
   Author : gorupa (https://github.com/gorupa)
   License: MIT
   ============================================ */

'use strict';

const GITHUB_SVG = `<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`;

/* ── Project Data ── */
const projects = [
    {
        category: 'browser',
        theme:    'blue',
        icon:     'compress',
        title:    'Local Image Compressor',
        desc:     'Compress JPG & PNG images instantly in your browser. Live size preview as you drag the quality slider — no uploads, ever.',
        tags: [
            { cls: 'tag-a', text: 'JPG' },
            { cls: 'tag-a', text: 'PNG' },
            { cls: 'tag-n', text: 'Canvas API' },
            { cls: 'tag-n', text: '100% Local' },
        ],
        liveLink: 'https://local-image-compressor.pages.dev/',
        codeLink: 'https://github.com/gorupa/local-image-compressor',
    },
    {
        category: 'browser',
        theme:    'orange',
        icon:     'picture_as_pdf',
        title:    'Image to PDF',
        desc:     'Convert JPG, PNG & WebP images into a PDF. Drag to reorder pages, pick page size and margins — all local.',
        tags: [
            { cls: 'tag-a', text: 'JPG' },
            { cls: 'tag-a', text: 'PNG' },
            { cls: 'tag-a', text: 'WebP' },
            { cls: 'tag-n', text: 'jsPDF' },
            { cls: 'tag-n', text: '100% Local' },
        ],
        liveLink: 'https://image-to-pdf-afb.pages.dev/',
        codeLink: 'https://github.com/gorupa/image-to-pdf',
    },
    {
        category: 'browser',
        theme:    'green',
        icon:     'build',
        title:    'PDF Tools',
        desc:     'Compress, lock, unlock and merge PDFs entirely in your browser. A complete local PDF suite with zero uploads.',
        tags: [
            { cls: 'tag-a', text: 'PDF' },
            { cls: 'tag-n', text: 'pdf-lib' },
            { cls: 'tag-n', text: 'PDF.js' },
            { cls: 'tag-n', text: '100% Local' },
        ],
        liveLink: 'https://pdf-tools-dgs.pages.dev/',
        codeLink: 'https://github.com/Gorupa/pdf-tools',
    },
    {
        category: 'browser',
        theme:    'blue',
        icon:     'account_balance_wallet',
        title:    'CashRoute',
        desc:     'A clean redirection interface for transferring money from digital wallets to your bank. CashRoute connects you to the right gateway — nothing more.',
        tags: [
            { cls: 'tag-a', text: 'Paytm' },
            { cls: 'tag-a', text: 'PhonePe' },
            { cls: 'tag-a', text: 'UPI' },
            { cls: 'tag-n', text: 'Redirect Only' },
        ],
        liveLink: 'https://cashroute-deh.pages.dev/',
        codeLink: 'https://github.com/Gorupa/cashroute',
    },
    {
        category: 'library',
        theme:    'orange',
        icon:     'insights',
        title:    'pulsekit.js',
        desc:     'The first open-source JS library for PhonePe Pulse data. Drop one script tag and get beautiful India payments charts — all 36 states, 2018 to 2023.',
        tags: [
            { cls: 'tag-a', text: 'JavaScript' },
            { cls: 'tag-a', text: 'PhonePe Pulse' },
            { cls: 'tag-n', text: 'Zero Setup' },
            { cls: 'tag-n', text: 'MIT' },
        ],
        liveLink: 'https://gorupa.github.io/pulsekit/demo/',
        codeLink: 'https://github.com/Gorupa/pulsekit',
    },
    {
        category: 'student',
        theme:    'green',
        icon:     'menu_book',
        title:    'MLSU Law Resources',
        desc:     'Free notes, syllabus & past papers for Mohan Lal Sukhadia University LLB & BA.LLB students. Filter by course, year and subject.',
        tags: [
            { cls: 'tag-a', text: 'LLB' },
            { cls: 'tag-a', text: 'BA.LLB' },
            { cls: 'tag-n', text: 'Notes' },
            { cls: 'tag-n', text: 'Past Papers' },
        ],
        liveLink: 'https://mlsu-dhj.pages.dev/',
        codeLink: 'https://github.com/Gorupa/mlsu-',
    },
];

/* ── Render cards ── */
function renderProjects() {
    const containers = {
        browser: document.getElementById('browser-tools'),
        library: document.getElementById('libraries'),
        student: document.getElementById('student-projects'),
    };

    // Update project counter
    document.getElementById('project-count').textContent = projects.length;

    projects.forEach((p, idx) => {
        const tagsHtml = p.tags
            .map(t => `<span class="tag ${t.cls}">${t.text}</span>`)
            .join('');

        const card = document.createElement('div');
        card.className = `project-card ${p.theme}`;
        card.style.animationDelay = `${0.05 * idx}s`;
        card.innerHTML = `
            <div class="card-icon">
                <span class="mi">${p.icon}</span>
            </div>
            <div class="card-body">
                <div class="card-title">${p.title}</div>
                <p class="card-desc">${p.desc}</p>
                <div class="card-bottom">
                    <div class="card-tags">${tagsHtml}</div>
                    <div class="card-btns">
                        <a class="cbtn live" href="${p.liveLink}" target="_blank" rel="noopener">
                            <span class="mi">open_in_new</span> Live
                        </a>
                        <a class="cbtn" href="${p.codeLink}" target="_blank" rel="noopener">
                            ${GITHUB_SVG} Code
                        </a>
                    </div>
                </div>
            </div>`;

        const key = p.category === 'student' ? 'student'
                  : p.category === 'library' ? 'library'
                  : 'browser';
        containers[key].appendChild(card);
    });
}

/* ── Load Material Icons font for card icons ── */
function loadMaterialIcons() {
    if (document.querySelector('link[href*="Material+Icons"]')) return;
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons+Round';
    document.head.appendChild(link);
}

/* ── Init ── */
loadMaterialIcons();
renderProjects();
