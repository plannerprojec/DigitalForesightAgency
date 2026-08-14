/* form.js, client-side validation for the Get a Quote form.
   The form posts natively to FormSubmit (emails hello@digitalforesightagency.com).
   This script blocks submission until required fields are valid and flags a honeypot. */
(function () {
  'use strict';

  var form = document.getElementById('quote-form');
  if (!form) return;

  var note = document.getElementById('form-note');
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(field, msg) {
    field.classList.add('invalid');
    field.setAttribute('aria-invalid', 'true');
    return msg;
  }
  function clearError(field) {
    field.classList.remove('invalid');
    field.removeAttribute('aria-invalid');
  }

  form.addEventListener('submit', function (e) {
    // Honeypot: if filled, it is a bot. Silently drop.
    var honey = form.querySelector('.hp');
    if (honey && honey.value) { e.preventDefault(); return; }

    var firstInvalid = null;
    var messages = [];

    var required = [
      { el: form.querySelector('#q-name'), label: 'your name' },
      { el: form.querySelector('#q-email'), label: 'a valid email', email: true },
      { el: form.querySelector('#q-service'), label: 'a service' },
      { el: form.querySelector('#q-details'), label: 'a few project details' }
    ];

    required.forEach(function (r) {
      if (!r.el) return;
      var val = (r.el.value || '').trim();
      var bad = !val || (r.email && !emailRe.test(val));
      if (bad) {
        setError(r.el, r.label);
        messages.push(r.label);
        if (!firstInvalid) firstInvalid = r.el;
      } else {
        clearError(r.el);
      }
    });

    if (firstInvalid) {
      e.preventDefault();
      if (note) {
        note.textContent = 'Please add ' + messages.join(', ') + '.';
        note.className = 'form-note error';
      }
      firstInvalid.focus();
      return;
    }

    // Valid: let the native POST proceed, show a sending state.
    if (note) { note.textContent = 'Sending your request...'; note.className = 'form-note sending'; }
    var btn = form.querySelector('.form-submit');
    if (btn) { btn.disabled = true; btn.style.opacity = '0.7'; }
  });

  /* Clear a field error as soon as the user fixes it */
  form.addEventListener('input', function (e) {
    if (e.target.classList && e.target.classList.contains('invalid')) clearError(e.target);
  });
})();
