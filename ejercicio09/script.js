const countdownElement = document.getElementById("countdown");

// Fecha y hora objetivo (formato: "YYYY-MM-DDTHH:mm:ss")
const targetDate = new Date("2023-12-31T23:59:59").getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        countdownElement.innerHTML = "¡Tiempo terminado!";
    }
}

setInterval(updateCountdown, 1000);
