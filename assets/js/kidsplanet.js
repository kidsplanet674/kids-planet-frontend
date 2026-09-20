/* Page content is delivered in HTML; JavaScript adds interaction only. */
(() => {
  'use strict';
  const slider = document.querySelector('.kp-slider');
  if (slider) {
    const slides = [...slider.querySelectorAll('.kp-slide')];
    const dots = [...slider.querySelectorAll('[data-slide-to]')];
    const pause = slider.querySelector('[data-slide-pause]');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let current = 0, paused = reduced.matches, timer, touchX;
    const schedule = () => {
      clearTimeout(timer);
      if (!paused && !document.hidden) timer = setTimeout(() => show(current + 1), 7000);
    };
    const show = index => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide,i) => { slide.hidden = i !== current; });
      dots.forEach((dot,i) => dot.setAttribute('aria-current', String(i === current)));
      schedule();
    };
    const label = () => { pause.textContent = paused ? 'Play' : 'Pause'; pause.setAttribute('aria-label', paused ? 'Start automatic slides' : 'Pause automatic slides'); };
    slider.querySelector('.kp-slider-controls').hidden = false;
    slider.querySelector('[data-slide-prev]').addEventListener('click', () => show(current - 1));
    slider.querySelector('[data-slide-next]').addEventListener('click', () => show(current + 1));
    dots.forEach((dot,i) => dot.addEventListener('click', () => show(i)));
    pause.addEventListener('click', () => { paused = !paused; label(); schedule(); });
    slider.querySelectorAll('.kp-slider-controls, .kp-slide-copy a').forEach(control => {
      control.addEventListener('mouseenter', () => clearTimeout(timer));
      control.addEventListener('mouseleave', schedule);
    });
    slider.addEventListener('focusin', () => { paused = true; label(); clearTimeout(timer); });
    document.addEventListener('visibilitychange', schedule);
    reduced.addEventListener('change', () => { paused = reduced.matches; label(); schedule(); });
    slider.addEventListener('touchstart', event => { touchX = event.changedTouches[0].clientX; }, {passive:true});
    slider.addEventListener('touchend', event => { const dx = event.changedTouches[0].clientX - touchX; if (Math.abs(dx) > 60 && !event.target.closest('.kp-slider-controls')) { paused = true; label(); show(current + (dx < 0 ? 1 : -1)); } }, {passive:true});
    label(); show(0);
  }
  document.documentElement.classList.replace('no-js', 'js');
  const menu = document.querySelector('.tp-offcanvas');
  const toggle = document.querySelector('.tp-header-toogle');
  const close = document.querySelector('.tp-offcanvas-close');
  const overlay = document.querySelector('.body-overlay');
  const links = document.querySelector('.tp-mobile-menu-active ul');
  if (menu && links) menu.querySelector('nav').append(links.cloneNode(true));
  let returnFocus;
  const setMenu = open => {
    menu.classList.toggle('tp-offcanvas-open', open);
    menu.inert = !open;
    menu.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    overlay.classList.toggle('kp-overlay-open', open);
    document.body.classList.toggle('kp-menu-open', open);
    if (open) { returnFocus = document.activeElement; close.focus(); }
    else if (returnFocus) { returnFocus.focus(); returnFocus = null; }
  };
  if (menu && toggle) {
    menu.inert = true;
    menu.setAttribute('aria-hidden', 'true');
    toggle.addEventListener('click', () => setMenu(true));
    close.addEventListener('click', () => setMenu(false));
    overlay.addEventListener('click', () => setMenu(false));
    document.addEventListener('keydown', event => {
      if (!menu.classList.contains('tp-offcanvas-open')) return;
      if (event.key === 'Escape') setMenu(false);
      if (event.key === 'Tab') {
        const items = [...menu.querySelectorAll('a[href], button')];
        if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); items.at(-1).focus(); }
        else if (!event.shiftKey && document.activeElement === items.at(-1)) { event.preventDefault(); items[0].focus(); }
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1200 && menu.classList.contains('tp-offcanvas-open')) setMenu(false);
    });
  }
  const back = document.querySelector('#back_to_top');
  back?.setAttribute('aria-label', 'Back to top');
  back?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }));
  const onScroll = () => document.querySelector('.back-to-top-wrapper')?.classList.toggle('back-to-top-btn-show', window.scrollY > 500);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      const target = Number(entry.target.dataset.kpCount), start = performance.now();
      const frame = now => {
        const progress = Math.min((now - start) / 900, 1);
        entry.target.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }), { threshold: 0.5 });
    document.querySelectorAll('[data-kp-count]').forEach(el => observer.observe(el));
  }
  const form = document.querySelector('#contact-form');
  if (form) form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const submit = form.querySelector('[type="submit"]');
    const status = form.querySelector('.ajax-response');
    submit.disabled = true;
    submit.textContent = 'Sending…';
    status.textContent = 'Sending your enquiry…';
    status.className = 'ajax-response mt-20';
    try {
      const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || 'Your enquiry could not be sent. Please call 9337164626 or use WhatsApp.');
      status.textContent = data.message;
      status.classList.add('success');
      form.reset();
    } catch (error) {
      status.textContent = error instanceof SyntaxError || error instanceof TypeError ? 'Your enquiry could not be confirmed. Please call 9337164626 or use WhatsApp.' : error.message;
      status.classList.add('error');
    } finally {
      submit.disabled = false;
      submit.textContent = 'Send Enquiry';
    }
  });
})();
