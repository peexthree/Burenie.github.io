// Открытие/закрытие модального окна
const modal = document.getElementById("requestModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Отправка формы
document.getElementById("requestForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Здесь код отправки в Telegram (как в предыдущих примерах)
    alert("Заявка отправлена! Мы свяжемся с вами в течение 15 минут.");
    modal.style.display = "none";
    this.reset();
});
