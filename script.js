// JavaScript para animar el scroll suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 50, // Ajuste para compensar el encabezado
            behavior: 'smooth'
        });
    });
});
