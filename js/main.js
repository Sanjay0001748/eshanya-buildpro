/* Eshanya BuildPro — site behaviour
 *
 * EDIT THIS BLOCK to switch on the optional parts of the page.
 * Anything left empty stays hidden, so the live site never shows a blank or broken item.
 */
var SITE = {
  whatsapp: '919742481544',

  // Paste your full page links (https://...). The icons always show in the footer;
  // an icon with no link here does nothing when clicked, so fill these in before publishing.
  social: {
    facebook: '',
    instagram: '',
    youtube: '',
    linkedin: ''
  },

  // Paste your Google Business Profile link to show "Read more reviews on Google".
  googleReviewsUrl: '',

  // Add real customer reviews to show the testimonials section. Example:
  // { quote: 'What the customer said.', name: 'Customer name', project: 'House construction, Vijayanagar' }
  reviews: []
};

(function () {
  'use strict';

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Enquiry forms: open WhatsApp with the details filled in.
  // No server is needed, and the enquiry lands on the phone you already answer.
  function value(form, name) {
    var el = form.elements[name];
    return el && el.value ? el.value.trim() : '';
  }
  document.querySelectorAll('form[data-enquiry]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var lines = ['Hello Eshanya BuildPro, I would like a quote.', ''];
      [['Name', 'name'], ['Phone', 'phone'], ['Site location', 'location'],
       ['Service', 'service'], ['Approximate budget', 'budget'], ['Requirements', 'message']
      ].forEach(function (pair) {
        var v = value(form, pair[1]);
        if (v) { lines.push(pair[0] + ': ' + v); }
      });
      var url = 'https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener');
    });
  });

  // Social icons
  Object.keys(SITE.social).forEach(function (key) {
    var link = document.querySelector('[data-social="' + key + '"]');
    if (!link) { return; }
    if (SITE.social[key]) {
      link.href = SITE.social[key];
    } else {
      link.removeAttribute('target');
      link.addEventListener('click', function (e) { e.preventDefault(); });
    }
  });

  // Testimonials
  var section = document.getElementById('testimonials');
  var list = document.getElementById('review-list');
  if (section && list && SITE.reviews.length) {
    SITE.reviews.forEach(function (r) {
      var fig = document.createElement('figure');
      fig.className = 'review';
      var q = document.createElement('blockquote');
      q.textContent = r.quote;
      var cap = document.createElement('figcaption');
      var name = document.createElement('strong');
      name.textContent = r.name;
      var proj = document.createElement('span');
      proj.textContent = r.project || '';
      cap.appendChild(name);
      cap.appendChild(proj);
      fig.appendChild(q);
      fig.appendChild(cap);
      list.appendChild(fig);
    });
    section.hidden = false;
    document.querySelectorAll('[data-link="testimonials"]').forEach(function (el) { el.hidden = false; });
  }
  var more = document.getElementById('reviews-more');
  if (more && SITE.googleReviewsUrl) {
    more.querySelector('a').href = SITE.googleReviewsUrl;
    more.hidden = false;
  }

  // Footer year
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }
})();
