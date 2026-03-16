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
        icon: "account_balance",
        title: "ecourts-js",
        desc: "A powerful, open-source Node.js library for scraping and extracting Indian court case data directly from the official eCourts portal. Built specifically for civic tech, legal research, and automated case tracking.",
        tags: ["Node.js", "Web Scraping", "Legal Tech"],
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
        tags: ["JavaScript", "Data API", "NPM"],
        liveLink: "https://gorupa.github.io/pulsekit/demo/",
        codeLink: "https://github.com/Gorupa/pulsekit",
        articleLink: "https://dev.to/gorupa/i-built-the-first-open-source-js-library-for-phonepe-pulse-datapublished-5306"
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
        
        if (proj.category === 'student') {
            studentContainer.innerHTML += cardHtml;
        } else if (proj.category === 'library') {
            libraryContainer.innerHTML += cardHtml;
        } else {
            browserContainer.innerHTML += cardHtml;
        }
    });
}

// Execute Render
renderProjects();
