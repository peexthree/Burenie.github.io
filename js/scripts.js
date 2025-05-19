document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData
        }).then(() => {
            alert("Спасибо! Мы получили вашу заявку.");
            form.reset();
        }).catch((error) => {
            alert("Ошибка отправки формы. Попробуйте снова.");
            console.error(error);
        });
    });
});
