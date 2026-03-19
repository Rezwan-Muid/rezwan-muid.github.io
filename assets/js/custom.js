/* Munshi — custom interactions */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll Reveal ──────────────────────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ── Typing effect on homepage title ────────────────────── */
  const isHome = window.location.pathname === '/' || window.location.pathname === '/about/' || window.location.pathname === '/about.html';
  if (isHome) {
    const title = document.querySelector('.page__title');
    if (title) {
      // strip the "> " prefix added by CSS ::before, work on the text node
      const raw = title.childNodes[title.childNodes.length - 1];
      if (raw && raw.nodeType === Node.TEXT_NODE) {
        const full = raw.textContent.trim();
        raw.textContent = '';
        title.style.borderRight = '2px solid #f97316';
        let i = 0;
        const type = () => {
          if (i <= full.length) { raw.textContent = full.slice(0, i++); setTimeout(type, 55); }
          else { setTimeout(() => title.style.borderRight = 'none', 600); }
        };
        setTimeout(type, 300);
      }
    }
  }

  /* ── Stagger archive/pub cards ──────────────────────────── */
  document.querySelectorAll('.archive__item, .pub-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.07}s`;
    observer.observe(el);
  });

  /* ── Stagger timeline items ─────────────────────────────── */
  document.querySelectorAll('.timeline-item').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.08}s`;
    observer.observe(el);
  });

});
