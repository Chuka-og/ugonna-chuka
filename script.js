const countdown = document.getElementById('countdown');

const weddingDate = new Date('December 31, 2026 12:00:00').getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  countdown.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes`;
}, 1000);

const form = document.getElementById('rsvpForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e){
  e.preventDefault();
  successMessage.innerHTML = "Thank you! Your RSVP has been received.";
  form.reset();
});
