// Calculator functionality
document.getElementById('costCalculator').addEventListener('submit', function(e) {
    e.preventDefault();
    const depth = parseFloat(document.getElementById('depth').value);
    const diameter = document.getElementById('diameter').value;
    const result = document.getElementById('result');

    if (depth && diameter) {
        let cost, time;
        switch(diameter) {
            case '100':
                cost = depth * 500;
                time = '1 день';
                break;
            case '150':
                cost = depth * 600;
                time = '1-2 дня';
                break;
            case '200':
                cost = depth * 700;
                time = '2 дня';
                break;
        }

        document.getElementById('costValue').textContent = `от ${Math.round(cost)} ₽`;
        document.getElementById('time').textContent = time;
        result.style.display = 'block';

        // Scroll to result
        result.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});

// Lead form submission
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (name && phone) {
        alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
        this.reset();
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});