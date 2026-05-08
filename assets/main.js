// The Serenity Spot, shared interactive behavior
// - Mobile nav toggle
// - Modal open/close
// - Active nav link highlighting
// - Esc-to-close, focus trap (lightweight)

(function () {
  const ready = (fn) =>
    document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn);

  ready(() => {
    // ---------- Mobile nav ----------
    const navToggle = document.querySelector('[data-nav-toggle]');
    const navMenu = document.querySelector('[data-nav-menu]');
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const open = navMenu.classList.toggle('hidden') === false;
        navToggle.setAttribute('aria-expanded', String(open));
      });
    }

    // ---------- Active nav link ----------
    const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('[data-nav-link]').forEach((a) => {
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (href === here || (here === '' && href === 'index.html')) {
        a.classList.add('text-sage-700', 'font-semibold');
        a.setAttribute('aria-current', 'page');
      }
    });

    // ---------- Modals ----------
    const openers = document.querySelectorAll('[data-modal-open]');
    const closers = document.querySelectorAll('[data-modal-close]');
    let lastFocus = null;

    const openModal = (id) => {
      const modal = document.getElementById(id);
      if (!modal) return;
      lastFocus = document.activeElement;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable) focusable.focus();
      document.body.style.overflow = 'hidden';
    };
    const closeModal = (modal) => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    };

    openers.forEach((btn) => {
      btn.addEventListener('click', () => openModal(btn.getAttribute('data-modal-open')));
    });
    closers.forEach((btn) => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.modal-backdrop');
        if (modal) closeModal(modal);
      });
    });
    document.querySelectorAll('.modal-backdrop').forEach((modal) => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop.is-open').forEach(closeModal);
      }
    });
  });
})();
