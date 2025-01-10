document.addEventListener('DOMContentLoaded', function () {
  const promoInput = document.getElementById('promo-input');
  const promoSubmit = document.getElementById('promo-submit');
  const privateContent = document.getElementById('private-content');
  const errorMessage = document.getElementById('error-message');
  const promoFormContainer = document.getElementById('promo-form-container');

  const correctPromoCode = 'I_Am_Open';

  promoSubmit.addEventListener('click', function () {
    const enteredCode = promoInput.value.trim();

    if (enteredCode === correctPromoCode) {
        privateContent.style.display = 'block';
        promoFormContainer.style.display = 'none'
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
  });

    document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });
});
