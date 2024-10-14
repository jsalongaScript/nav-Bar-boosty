// Countdown Timer
const countdown = () => {
    const saleEndDate = new Date('Oct 15, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const timeleft = saleEndDate - now;

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} Days : ${hours} Hrs : ${minutes} Mins : ${seconds} Secs`;

    if (timeleft < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Sale has ended!";
    }
};

const x = setInterval(countdown, 1000);

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('active');
}

