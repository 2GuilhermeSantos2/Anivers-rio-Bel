const countDownDate = new Date("Mar 11, 2024 00:00:00").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Se a data atual for após a data da contagem regressiva, redirecionar imediatamente
  if (now > countDownDate) {
    window.location.href = 'aniversario.html'; // Página de parabéns
  } else {
    // Atualizar a contagem regressiva
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  }
}, 1000);
