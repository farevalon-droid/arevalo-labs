/**
 * AREVALO LABS® — Contact Dispatch Module
 * Pattern: Module / IIFE — no globals leaked
 * Security: Input sanitization before URL encoding
 */

;(function (window) {
  'use strict';

  /* ── Config — no API keys, only public routing ─────────── */
  var CONTACT = {
    // WhatsApp Business number (public, not an API key)
    WA_NUMBER: '573113363362',
    // Fallback email (public contact info)
    EMAIL: 'frankarevalo134@gmail.com'
  };

  /* ── Input sanitizer ────────────────────────────────────── */
  function sanitize(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/[<>'"&]/g, function (c) {
        return { '<': '', '>': '', "'": '', '"': '', '&': '' }[c];
      })
      .trim()
      .slice(0, 500); // hard length cap
  }

  /* ── WhatsApp dispatch ──────────────────────────────────── */
  function dispatchWhatsApp() {
    var nameEl    = document.getElementById('contact-name');
    var serviceEl = document.getElementById('contact-service');
    var detailEl  = document.getElementById('contact-details');

    if (!nameEl || !serviceEl || !detailEl) return;

    var name    = sanitize(nameEl.value);
    var service = sanitize(serviceEl.value);
    var details = sanitize(detailEl.value) || 'Sin detalles adicionales';

    if (!name) {
      nameEl.focus();
      return;
    }

    var message =
      'Hola Frank, te contacto desde la terminal de Arevalo Labs.\n\n' +
      '\u2022 Nombre/Empresa: ' + name    + '\n' +
      '\u2022 Tipo de Proyecto: ' + service + '\n' +
      '\u2022 Detalles: ' + details       + '\n\n' +
      'Deseo coordinar una sesi\u00f3n de diagn\u00f3stico t\u00e9cnico.';

    var url = 'https://wa.me/' + CONTACT.WA_NUMBER + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  /* ── Mobile menu toggle ─────────────────────────────────── */
  function initMobileMenu() {
    var btn   = document.querySelector('[aria-label="Menu Toggle"]');
    var nav   = document.querySelector('nav[data-active-classes]');
    if (!btn || !nav) return;

    var mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.className = [
      'fixed inset-0 z-40 bg-surface-container-lowest/95',
      'backdrop-blur-md flex flex-col items-center justify-center',
      'gap-8 hidden'
    ].join(' ');

    // Clone nav links
    var links = nav.querySelectorAll('a');
    links.forEach(function (link) {
      var clone = link.cloneNode(true);
      clone.className = 'font-label-mono-lg text-label-mono-lg uppercase tracking-widest text-on-surface hover:text-primary-fixed transition-colors text-2xl';
      clone.addEventListener('click', function () { closeMenu(); });
      mobileMenu.appendChild(clone);
    });

    // Close button
    var closeBtn = document.createElement('button');
    closeBtn.textContent = '\u00d7';
    closeBtn.setAttribute('aria-label', 'Cerrar menú');
    closeBtn.className = 'absolute top-6 right-6 text-on-surface text-3xl hover:text-primary-fixed transition-colors';
    closeBtn.addEventListener('click', closeMenu);
    mobileMenu.appendChild(closeBtn);

    document.body.appendChild(mobileMenu);

    function openMenu() {
      mobileMenu.classList.remove('hidden');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      btn.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      mobileMenu.classList.add('hidden');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', openMenu);
  }

  /* ── Active nav on scroll (Intersection Observer) ───────── */
  function initScrollSpy() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('nav a[data-path]');
    if (!sections.length || !navLinks.length) return;

    var activeClass = ['text-primary-fixed', 'border-b-2', 'border-primary-fixed'];
    var inactiveClass = ['text-on-surface-variant', 'hover:text-primary-fixed'];

    function setActive(id) {
      navLinks.forEach(function (link) {
        var isActive = link.getAttribute('data-path') === id;
        activeClass.forEach(function (c) {
          link.classList.toggle(c, isActive);
        });
        inactiveClass.forEach(function (c) {
          link.classList.toggle(c, !isActive);
        });
      });
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ── Lazy-load animation for stat cards ─────────────────── */
  function initFadeIn() {
    var elements = document.querySelectorAll('[data-fadein]');
    if (!elements.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(function (el) {
      el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500');
      observer.observe(el);
    });
  }

  /* ── Boot ───────────────────────────────────────────────── */
  function boot() {
    initMobileMenu();
    initScrollSpy();
    initFadeIn();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  /* ── Public API (only what the HTML needs) ──────────────── */
  window.ArevaloLabs = {
    dispatchWhatsApp: dispatchWhatsApp
  };

}(window));

