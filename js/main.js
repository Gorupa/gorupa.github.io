// 1. Define your projects with your EXACT custom data
const myProjects = [
    {
        category: "browser",
        theme: "blue",
        icon: "compress",
        title: "Local Image Compressor",
        desc: "Compress JPG & PNG images instantly in your browser. Live size preview as you drag the quality slider — no uploads, ever.",
        tags: [
            { class: "tag-a", text: "JPG" },
            { class: "tag-a", text: "PNG" },
            { class: "tag-n", text: "Canvas API" },
            { class: "tag-n", text: "100% Local" }
        ],
        liveLink: "https://local-image-compressor.pages.dev/",
        codeLink: "https://github.com/gorupa/local-image-compressor"
    },
    {
        category: "browser",
        theme: "orange",
        icon: "picture_as_pdf",
        title: "Image to PDF",
        desc: "Convert JPG, PNG & WebP images into a PDF in seconds. Drag to reorder pages, pick page size and margins — all local.",
        tags: [
            { class: "tag-a", text: "JPG" },
            { class: "tag-a", text: "PNG" },
            { class: "tag-a", text: "WebP" },
            { class: "tag-n", text: "jsPDF" },
            { class: "tag-n", text: "100% Local" }
        ],
        liveLink: "https://image-to-pdf-afb.pages.dev/",
        codeLink: "https://github.com/gorupa/image-to-pdf"
    },
    {
        category: "browser",
        theme: "green",
        icon: "build",
        title: "PDF Tools",
        desc: "A comprehensive suite of local PDF utilities. Edit, split, compress, and manipulate your PDF files directly in your browser securely.",
        tags: [
            { class: "tag-a", text: "PDF" },
            { class: "tag-n", text: "pdf-lib" },
            { class: "tag-n", text: "100% Local" }
        ],
        liveLink: "https://pdf-tools-dgs.pages.dev/",
        codeLink: "https://github.com/Gorupa/pdf-tools"
    },
    {
        category: "browser",
        theme: "blue",
        icon: "account_balance_wallet",
        title: "Cashroute",
        desc: "A clean, fast redirection interface for transferring money from digital wallets to your bank account. CashRoute does not process payments — it simply connects you to the right gateway.

.",
        tags: [
            { class: "tag-a", text: "Finance" },
            { class: "tag-n", text: "Wallet Transfer" },
            { class: "tag-n", text: "100% Local" }
        ],
        liveLink: "https://cashroute-deh.pages.dev/",
        codeLink: "https://github.com/Gorupa/cashroute"
    },
    {
        category: "student",
        theme: "green",
        icon: "menu_book",
        title: "MLSU Law Resources",
        desc: "Free notes, syllabus & past papers for Mohan Lal Sukhadia University LLB & BA.LLB students. Filter by course, year and subject.",
        tags: [
            { class: "tag-a", text: "LLB" },
            { class: "tag-a", text: "BA.LLB" },
            { class: "tag-n", text: "Notes" },
            { class: "tag-n", text: "Past Papers" }
        ],
        liveLink: "https://mlsu-dhj.pages.dev/",
        codeLink: "https://github.com/Gorupa/mlsu-"
    }
];

// 2. Generate the exact same HTML structure automatically
function renderProjects() {
    const browserContainer = document.getElementById('browser-tools');
    const studentContainer = document.getElementById('student-projects');
    
    // Update the project counter automatically
    document.getElementById('project-count').innerText = myProjects.length;

    myProjects.forEach(proj => {
        // Build the tags HTML exactly as it was
        const tagsHtml = proj.tags.map(tag => `<span class="tag ${tag.class}">${tag.text}</span>`).join('');

        // Build the full card HTML exactly as it was
        const cardHtml = `
        <div class="project-card ${proj.theme}">
            <div class="card-row">
                <div class="card-icon"><span class="material-icons-round">${proj.icon}</span></div>
                <div class="card-body">
                    <div class="card-title">${proj.title}</div>
                    <p class="card-desc">${proj.desc}</p>
                    <div class="card-bottom">
                        <div class="card-tags">
                            ${tagsHtml}
                        </div>
                        <div class="card-btns">
                            <a class="cbtn live" href="${proj.liveLink}" target="_blank" rel="noopener">
                                <span class="material-icons-round">open_in_new</span>Live
                            </a>
                            <a class="cbtn" href="${proj.codeLink}" target="_blank" rel="noopener">
                                <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        // Inject into the correct category container
        if (proj.category === 'student') {
            studentContainer.innerHTML += cardHtml;
        } else {
            browserContainer.innerHTML += cardHtml;
        }
    });
}

// 3. Execute the function
renderProjects();
