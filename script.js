// SCROLL
function scrollToSection() {
  document.getElementById("info").scrollIntoView({
    behavior: "smooth"
  });
}

// ANIMAÇÃO DE SCROLL
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((el, index) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      setTimeout(() => {
        el.classList.add('active');
      }, index * 120);
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// NOTIFICAÇÃO REALISTA
const notification = document.getElementById("notification");
const status = document.getElementById("status");

function showAlert() {
  notification.style.transition = "0.5s";
  notification.style.transform = "translateX(-50%) translateY(0)";
  notification.style.opacity = "1";

  // muda status
  status.innerHTML = "Status: ⚠️ Alerta";

  setTimeout(() => {
    notification.style.transform = "translateX(-50%) translateY(-100px)";
    notification.style.opacity = "0";

    // volta ao normal
    status.innerHTML = "Status: Normal";
  }, 4000);
}

// LOOP (apresentação feira)
setInterval(showAlert, 6000);