// Formulaire d'intérêt : validation simple + envoi vers le point d'accès défini dans l'attribut action du <form>.
(function () {
  var form = document.getElementById('interest-form');
  if (!form) return;

  var status = document.getElementById('form-status');
  var button = form.querySelector('button[type="submit"]');

  function setStatus(message, kind) {
    status.textContent = message;
    status.className = 'status' + (kind ? ' ' + kind : '');
  }

  function validate() {
    var ok = true;
    ['name', 'email', 'consent'].forEach(function (id) {
      var el = form.elements[id];
      var valid = el.type === 'checkbox' ? el.checked : el.checkValidity() && el.value.trim() !== '';
      el.classList.toggle('invalid', !valid);
      if (!valid) ok = false;
    });
    return ok;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    setStatus('', '');

    if (!validate()) {
      setStatus('Merci de renseigner votre nom, une adresse e-mail valide et d’accepter le consentement.', 'err');
      return;
    }

    // Anti-spam : le champ piège doit rester vide.
    if (form.elements['_gotcha'].value) return;

    var endpoint = form.getAttribute('action');
    if (!endpoint || endpoint.indexOf('REMPLACER_MOI') !== -1) {
      setStatus('Le formulaire n’est pas encore relié à un service d’envoi (voir README).', 'err');
      return;
    }

    button.disabled = true;
    setStatus('Envoi en cours…', '');

    fetch(endpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        form.reset();
        setStatus('Merci. Nous vous recontactons très prochainement.', 'ok');
      })
      .catch(function () {
        setStatus('L’envoi a échoué. Réessayez, ou écrivez-nous directement par e-mail.', 'err');
      })
      .then(function () {
        button.disabled = false;
      });
  });

  form.addEventListener('input', function (event) {
    event.target.classList.remove('invalid');
  });
})();
