/**
 * NISHA P - Developer Portfolio Script
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initNavbar();
    initMobileMenu();
    initProjectModals();
    initContactForm();
    initClipboard();
    initCurrentYear();
});

/* --- Scroll Progress Bar --- */
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${scrollPercent}%`;
    }, { passive: true });
}

/* --- Navbar Scroll Elevation & Active Spy --- */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu-desktop .nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-menu-drawer .mobile-nav-link');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (navbar) {
            if (scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Active link spy
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        mobileLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

/* --- Mobile Menu Drawer --- */
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-menu-drawer');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!toggleBtn || !drawer) return;

    const toggle = (open) => {
        const isOpen = open !== undefined ? open : drawer.classList.contains('open');
        if (isOpen) {
            drawer.classList.remove('open');
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            toggleBtn.setAttribute('aria-expanded', 'false');
        } else {
            drawer.classList.add('open');
            hamburgerIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            toggleBtn.setAttribute('aria-expanded', 'true');
        }
    };

    toggleBtn.addEventListener('click', () => toggle());

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggle(true));
    });
}

/* --- Project Case Study Modal --- */
function initProjectModals() {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalRepoBtn = document.getElementById('modal-repo-btn');
    const closeBtn = document.getElementById('modal-close');
    const dismissBtn = document.getElementById('modal-dismiss-btn');
    const triggers = document.querySelectorAll('.modal-trigger');

    if (!modal || !modalBody) return;

    const openModal = (projectId) => {
        const projectList = window.PORTFOLIO_DATA?.projects || [];
        const data = projectList.find(p => p.id === projectId);
        if (!data) return;

        modalTitle.textContent = data.title;
        
        const highlightsList = data.highlights.map(h => `
            <li style="display:flex; align-items:flex-start; gap:8px; font-size:0.85rem; color:#cbd5e1; margin-bottom:8px;">
                <span style="color:var(--accent-cyan);">▹</span>
                <span>${h}</span>
            </li>
        `).join('');

        const techList = data.techStack.map(t => `
            <span style="font-family:var(--font-mono); font-size:0.75rem; padding:3px 10px; border-radius:6px; background:rgba(16,24,40,0.8); border:1px solid var(--border-subtle); color:var(--accent-cyan);">${t}</span>
        `).join('');

        modalBody.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:16px;">
                <div style="display:flex; gap:8px;">
                    <span style="font-family:var(--font-mono); font-size:0.75rem; padding:3px 10px; border-radius:9999px; background:rgba(6,182,212,0.12); color:var(--accent-cyan); border:1px solid rgba(6,182,212,0.3); font-weight:600;">
                        ${data.category}
                    </span>
                    <span style="font-family:var(--font-mono); font-size:0.75rem; padding:3px 10px; border-radius:9999px; background:rgba(16,185,129,0.12); color:var(--accent-emerald); border:1px solid rgba(16,185,129,0.3); font-weight:600;">
                        ${data.tag}
                    </span>
                </div>
                
                <div>
                    <h4 style="font-family:var(--font-mono); font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); margin-bottom:4px;">Project Overview</h4>
                    <p style="font-size:0.9rem; color:#cbd5e1; line-height:1.6;">${data.summary}</p>
                </div>

                <div>
                    <h4 style="font-family:var(--font-mono); font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px;">Key Implementation Highlights</h4>
                    <ul style="list-style:none; padding:0;">${highlightsList}</ul>
                </div>

                <div>
                    <h4 style="font-family:var(--font-mono); font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px;">Technologies Used</h4>
                    <div style="display:flex; flex-wrap:wrap; gap:6px;">${techList}</div>
                </div>
            </div>
        `;

        if (modalRepoBtn && data.githubUrl) {
            modalRepoBtn.href = data.githubUrl;
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    triggers.forEach(trig => {
        trig.addEventListener('click', () => {
            const pid = trig.getAttribute('data-modal');
            openModal(pid);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (dismissBtn) dismissBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/* --- Contact Form Handling --- */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');

        const validateField = (input) => {
            const error = input.parentElement.querySelector('.error-msg');
            if (!input.value.trim() || (input.type === 'email' && !validateEmail(input.value))) {
                input.classList.add('invalid');
                if (error) error.classList.add('show');
                isValid = false;
            } else {
                input.classList.remove('invalid');
                if (error) error.classList.remove('show');
            }
        };

        [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
            if (inp) validateField(inp);
        });

        if (!isValid) return;

        submitBtn.disabled = true;
        submitText.textContent = 'Sending...';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitText.textContent = 'Send Message';
            form.reset();
            showToast('Thank you! Your message has been sent to Nisha.');
        }, 600);
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

/* --- Clipboard Copy & Toast --- */
function initClipboard() {
    const copyBtn = document.getElementById('copy-email-btn');
    const emailEl = document.getElementById('email-address');

    if (!copyBtn || !emailEl) return;

    copyBtn.addEventListener('click', () => {
        const text = emailEl.textContent.trim();
        navigator.clipboard.writeText(text).then(() => {
            showToast(`Copied ${text} to clipboard!`);
        }).catch(() => {
            showToast(`Email: ${text}`);
        });
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

/* --- Dynamic Year --- */
function initCurrentYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}
