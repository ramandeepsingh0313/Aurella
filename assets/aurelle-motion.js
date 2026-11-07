(() => {
  if (window.AurelleMotion) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const revealSelector = [
    '.aurelle-hero__copy',
    '.aurelle-hero__visual',
    '.aurelle-categories__heading-group',
    '.aurelle-categories__view-all',
    '.aurelle-categories__card',
    '.aurelle-featured-editions__card',
    '.aurelle-iconic-products__header',
    '.aurelle-product-card',
    '.aurelle-lookbook__content',
    '.aurelle-lookbook__visual',
    '.aurelle-occasions__header',
    '.aurelle-occasions__card',
    '.aurelle-craftsmanship__visual',
    '.aurelle-craftsmanship__content',
    '.aurelle-press__inner',
    '.aurelle-testimonials__inner',
    '.aurelle-collector__main',
    '.ac__hero-copy',
    '.ac__hero-visual',
    '.ac__toolbar',
    '.ac__card',
    '.ac__editorial-image',
    '.ac__editorial-copy',
    '.ac__empty',
    '.aurelle-product__breadcrumbs',
    '.aurelle-product__gallery',
    '.aurelle-product__purchase',
    '.aurelle-product__details',
    '.aurelle-product__atelier-visual',
    '.aurelle-product__atelier-copy',
    '.aurelle-product__reviews-inner',
    '.aurelle-product__services-inner',
    '.aurelle-featured-product__gallery',
    '.aurelle-featured-product__details',
    '.aurelle-recommendations__header',
    '.aurelle-recommendations__track',
    '.aurelle-cart__inner > h1',
    '.aurelle-cart__item',
    '.aurelle-cart__summary',
    '.aurelle-search__inner > h1',
    '.search-result',
    '.collection-card',
    '.aurelle-contact__inner > :not(script):not(style)',
    '.aurelle-blog__inner > h1',
    '.aurelle-blog__card',
    '.aurelle-article__image',
    '.aurelle-article__inner > h1',
    '.aurelle-article__content',
    '.aurelle-page__inner',
    '.aurelle-not-found__inner',
    '.template-password form',
  ].join(',');

  const staggerGroupSelector = [
    '.aurelle-categories__grid',
    '.aurelle-featured-editions__grid',
    '.aurelle-occasions__grid',
    '.ac__grid',
    '.aurelle-recommendations__track',
    '.aurelle-blog__grid',
    '.search-results',
    '.collections',
  ].join(',');

  let observer;

  const reveal = (element) => {
    element.classList.remove('aurelle-motion-pending');
    element.classList.add('aurelle-motion-visible');
    element.dataset.aurelleMotionState = 'visible';
    observer?.unobserve(element);
  };

  const getObserver = () => {
    if (observer || !('IntersectionObserver' in window)) return observer;
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) reveal(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -24px 0px' });
    return observer;
  };

  const getTargets = (root) => {
    const targets = [];
    if (root.matches?.(revealSelector)) targets.push(root);
    targets.push(...(root.querySelectorAll?.(revealSelector) || []));
    return [...new Set(targets)];
  };

  const initialize = (root = document) => {
    const targets = getTargets(root).filter((element) => !element.dataset.aurelleMotionState);
    if (!targets.length) return;

    targets.forEach((element) => {
      if (reducedMotion.matches || !('IntersectionObserver' in window)) {
        reveal(element);
        return;
      }

      const group = element.closest(staggerGroupSelector);
      if (group) {
        const groupTargets = getTargets(group);
        const index = Math.max(groupTargets.indexOf(element), 0);
        element.style.setProperty('--aurelle-motion-delay', `${Math.min(index * 70, 280)}ms`);
      }

      const bounds = element.getBoundingClientRect();
      const isNearViewport = bounds.top < window.innerHeight * 0.92;
      if (isNearViewport) {
        element.classList.add('aurelle-motion-intro', 'aurelle-motion-visible');
        element.dataset.aurelleMotionState = 'visible';
        return;
      }

      element.classList.add('aurelle-motion-pending');
      element.dataset.aurelleMotionState = 'pending';
      getObserver()?.observe(element);
    });
  };

  const unload = (root) => {
    getTargets(root).forEach((element) => observer?.unobserve(element));
  };

  const resetWorkingState = () => {
    document.querySelectorAll('.aurelle-motion-working').forEach((button) => {
      button.classList.remove('aurelle-motion-working');
      button.removeAttribute('aria-busy');
    });
  };

  window.AurelleMotion = { init: initialize, unload };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initialize(), { once: true });
  } else {
    initialize();
  }

  document.addEventListener('shopify:section:load', (event) => initialize(event.target));
  document.addEventListener('shopify:section:reorder', (event) => initialize(event.target));
  document.addEventListener('shopify:section:unload', (event) => unload(event.target));
  document.addEventListener('aurelle:motion:refresh', (event) => initialize(event.target || document));
  document.addEventListener('submit', (event) => {
    const form = event.target.closest('form[action*="/cart/add"]');
    if (!form || !form.checkValidity()) return;
    const submitter = event.submitter;
    if (!submitter || submitter.disabled) return;
    submitter.classList.add('aurelle-motion-working');
    submitter.setAttribute('aria-busy', 'true');
    window.setTimeout(resetWorkingState, 1600);
  });
  document.addEventListener('click', (event) => {
    const feedbackControl = event.target.closest('[data-wishlist-product], [data-option-value], .aurelle-product__thumbnail, .aurelle-featured-product__thumbnail');
    if (!feedbackControl || reducedMotion.matches) return;
    feedbackControl.classList.remove('aurelle-motion-confirmed');
    requestAnimationFrame(() => feedbackControl.classList.add('aurelle-motion-confirmed'));
    feedbackControl.addEventListener('animationend', () => feedbackControl.classList.remove('aurelle-motion-confirmed'), { once: true });
  });
  window.addEventListener('pageshow', resetWorkingState);
})();
