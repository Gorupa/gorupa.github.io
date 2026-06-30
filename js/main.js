// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Handle toggle click
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light' ? 'dark_mode' : 'light_mode';
}

// Project Data
const myProjects = [
    {
        category: "library",
        icon: "dark_mode",
        title: "Noir UI",
        desc: "Where the web gets serious. A dark editorial design system for agencies, portfolios, and SaaS builders who want their work to command attention — not blend in.",
        tags: ["CSS", "Design System", "Dark Mode"],
        liveLink: "https://noir-ui-kit.pages.dev/",
        codeLink: "https://github.com/Gorupa/noir-ui-kit"
    },
    {
        category: "library",
        icon: "palette",
        title: "KABOOM! UI",
        desc: "KABOOM! UI is a purely nostalgic, 100% CSS design system ripped straight from the pages of vintage comic books, Pop Art posters, and the gloriously chaotic 90s. No frameworks. No dependencies. No apologies. Just raw, inky, halftone-dotted style.",
        tags: ["CSS", "UI Kit", "Design System"],
        liveLink: "https://kaboom-ui-kit.pages.dev/",
        codeLink: "https://github.com/Gorupa/kaboom-ui-kit",
        articleLink: "https://dev.to/gorupa/i-was-tired-of-boring-uis-so-i-built-a-css-framework-straight-out-of-a-1962-comic-book-mc1"
    },
    {
        category: "library",
        icon: "account_balance",
        title: "ecourts-js",
        desc: "A powerful, open-source Node.js library for scraping and extracting Indian court case data directly from the official eCourts portal. Built specifically for civic tech, legal research, and automated case tracking.",
        tags: ["Node.js", "Web Scraping", "NPM", "zkTLS"],
        liveLink: "https://gorupa.github.io/vaad-explainer/#",
        codeLink: "https://github.com/Gorupa/ecourts-js"
    },
    {
        category: "library",
        icon: "verified_user",
        title: "India Validators",
        desc: "Zero-dependency validation library for Indian formats (Aadhaar, PAN, GSTIN, UPI, IFSC, etc.). Lightweight, fast, and works seamlessly in Node.js and the browser.",
        tags: ["JavaScript", "Validation", "NPM"],
        liveLink: "https://gorupa.github.io/india-validators/demo/",
        codeLink: "https://github.com/Gorupa/india-validators",
        articleLink: "https://dev.to/gorupa/i-built-a-zero-dependency-validation-library-for-every-indian-developer-55ck"
    },
    {
        category: "library",
        icon: "insights",
        title: "PulseKit",
        desc: "A pioneering JavaScript library for interacting with PhonePe Pulse data. The first open-source tool to simplify visualizing India's digital payment trends.",
        tags: ["JavaScript", "Data API", "CDN"],
        liveLink: "https://gorupa.github.io/pulsekit/demo/",
        codeLink: "https://github.com/Gorupa/pulsekit",
        articleLink: "https://dev.to/gorupa/i-built-the-first-open-source-js-library-for-phonepe-pulse-datapublished-5306"
    },
    {
        category: "browser",
        icon: "auto_awesome",
        title: "Astra",
        desc: "A minimalist numerology and astrological reading platform. No spam, no recharge pop-ups, no chaotic live chats—just clean, genuine, and math-driven insights.",
        tags: ["Astrology", "Numerology", "Utility"],
        liveLink: "https://astra-e8k.pages.dev/"
    },
    {
        category: "browser",
        icon: "payments",
        title: "ClearFin",
        desc: "A minimalist, privacy-first personal finance dashboard. Keep your financial data clear, accessible, and entirely under your own control.",
        tags: ["Finance", "Local-First", "Utility"],
        liveLink: "https://clearfin.pages.dev/"
    },
    {
        category: "browser",
        icon: "library_music",
        title: "OpenTune (Contribution)",
        desc: "Core contributions to OpenTune, an open-source, ad-free music streaming client. Focused on refining the user experience and maintaining accessible, community-driven software.",
        tags: ["Open Source", "Music", "Contribution"],
        liveLink: "https://opentune.netlify.app/"
    },
    {
        category: "browser",
        icon: "calculate",
        title: "Smart Calc",
        desc: "A human-centric, offline-first EMI and standard calculator built with radical transparency.",
        tags: ["Calculator", "Offline-First", "Utility"],
        liveLink: "https://gorupa.github.io/smart-calc/",
        codeLink: "https://github.com/Gorupa/smart-calc"
    },
    {
        category: "browser",
        icon: "inventory_2",
        title: "The Collector's Archives",
        desc: "Most physical collections — from a 1918 Silver Rupee to a Holographic Charizard — spend their lives in dark boxes, binders, and forgotten spreadsheets. The Collector's Archives is the antidote.",
        tags: ["Archive", "Collection", "Utility"],
        liveLink: "https://artifact-archive.pages.dev/",
        codeLink: "https://github.com/Gorupa/artifact-archive"
    },
    {
        category: "browser",
        icon: "fingerprint",
        title: "zkTLS Proof Verifier",
        desc: "A lightweight web tool to inspect and verify zkTLS proof files directly in the browser. Upload a proof.json file and view its metadata such as server source, timestamp, and proof hash.",
        tags: ["Blockchain", "Cryptography", "zkTLS"],
        liveLink: "https://gorupa.github.io/zktls-proof-verifier/",
        codeLink: "https://github.com/Gorupa/zktls-proof-verifier"
    },
    {
        category: "browser",
        icon: "gavel",
        title: "Vaad",
        desc: "Track Indian court cases instantly. Search by CNR number, party name or advocate name. Clean results, next hearing date front and centre. Free, no ads, open source.",
        tags: ["Legal Tech", "Court Tracker", "Open Source"],
        liveLink: "https://vaad.pages.dev/",
        codeLink: "https://github.com/Gorupa/vaad"
    },
    {
        category: "browser",
        icon: "compress",
        title: "Local Image Compressor",
        desc: "Compress JPG & PNG images instantly in your browser. Live size preview as you drag the quality slider — no server uploads, ever.",
        tags: ["Canvas API", "100% Local"],
        liveLink: "https://local-image-compressor.pages.dev/",
        codeLink: "https://github.com/gorupa/local-image-compressor"
    },
    {
        category: "browser",
        icon: "picture_as_pdf",
        title: "Image to PDF",
        desc: "Convert images into a PDF in seconds. Drag to reorder pages, pick page size and margins — processed entirely on your device.",
        tags: ["jsPDF", "100% Local"],
        liveLink: "https://image-to-pdf-afb.pages.dev/",
        codeLink: "https://github.com/gorupa/image-to-pdf"
    },
    {
        category: "browser",
        icon: "build",
        title: "PDF Tools",
        desc: "A comprehensive suite of local PDF utilities. Edit, split, compress, and manipulate your PDF files securely in your browser.",
        tags: ["pdf-lib", "100% Local"],
        liveLink: "https://pdf-tools-dgs.pages.dev/",
        codeLink: "https://github.com/Gorupa/pdf-tools"
    },
    {
        category: "browser",
        icon: "account_balance_wallet",
        title: "CashRoute",
        desc: "A clean, fast redirection interface for transferring money from digital wallets to your bank account. Connects you to the right gateway safely.",
        tags: ["Payment Utility", "Redirect"],
        liveLink: "https://cashroute-deh.pages.dev/",
        codeLink: "https://github.com/Gorupa/cashroute"
    },
    {
        category: "student",
        icon: "menu_book",
        title: "MLSU Law Resources",
        desc: "Free notes, syllabus & past papers for Mohan Lal Sukhadia University LLB & BA.LLB students. Filter by course, year and subject.",
        tags: ["Education", "Notes", "Open Access"],
        liveLink: "https://mlsu-dhj.pages.dev/",
        codeLink: "https://github.com/Gorupa/mlsu-"
    }
];

// Render Logic
function renderProjects() {
    const browserContainer = document.getElementById('browser-tools');
    const libraryContainer = document.getElementById('libraries');
    const studentContainer = document.getElementById('student-projects');

    // Clear existing content to prevent duplicates if called multiple times
    if(browserContainer) browserContainer.innerHTML = '';
    if(libraryContainer) libraryContainer.innerHTML = '';
    if(studentContainer) studentContainer.innerHTML = '';

    myProjects.forEach(proj => {
        const tagsHtml = proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        // Dynamically build links based on what is provided
        let linksHtml = '';
        if (proj.liveLink) {
            linksHtml += `<a href="${proj.liveLink}" target="_blank" rel="noopener">Live Demo <span class="material-icons-round">north_east</span></a>`;
        }
        if (proj.articleLink) {
            linksHtml += `<a href="${proj.articleLink}" target="_blank" rel="noopener">Read Article <span class="material-icons-round">article</span></a>`;
        }
        if (proj.codeLink) {
            linksHtml += `<a href="${proj.codeLink}" target="_blank" rel="noopener">Source Code <span class="material-icons-round">code</span></a>`;
        }

        const cardHtml = `
        <article class="project-item">
            <div class="project-header">
                <h3 class="project-title">
                    <span class="material-icons-round">${proj.icon}</span>
                    ${proj.title}
                </h3>
                <div class="tags">${tagsHtml}</div>
            </div>
            <p class="project-desc">${proj.desc}</p>
            <div class="project-links">
                ${linksHtml}
            </div>
        </article>
        `;
        
        if (proj.category === 'student' && studentContainer) {
            studentContainer.innerHTML += cardHtml;
        } else if (proj.category === 'library' && libraryContainer) {
            libraryContainer.innerHTML += cardHtml;
        } else if (browserContainer) {
            browserContainer.innerHTML += cardHtml;
        }
    });
}

// Execute Render
renderProjects();
