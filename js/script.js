document.addEventListener("DOMContentLoaded", () => {

    const botoesFiltro = document.querySelectorAll(".btn-filtro");
    const cardsMusica = document.querySelectorAll("#music .link-musica");

    botoesFiltro.forEach(botao => {
        botao.addEventListener("click", () => {
            botao.classList.toggle("ativo");
            const filtrosAtivos = Array.from(document.querySelectorAll(".btn-filtro.ativo"))
                .map(btn => btn.getAttribute("data-bpm"));

            cardsMusica.forEach(card => {
                if (filtrosAtivos.length === 0) {
                    card.classList.remove("escondido");
                    return;
                }

                const bpmMusica = parseInt(card.getAttribute("data-bpm"));
                let mostrar = false;

                if (filtrosAtivos.includes("ate-180") && bpmMusica <= 180) {
                    mostrar = true;
                }
                if (filtrosAtivos.includes("acima-180") && bpmMusica > 180) {
                    mostrar = true;
                }

                if (mostrar) {
                    card.classList.remove("escondido");
                } else {
                    card.classList.add("escondido");
                }
            });
        });
    });

    const btnTopo = document.getElementById("btn-topo");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    });

    btnTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    const linksMenu = document.querySelectorAll('.navbar a[href^="#"]');

    linksMenu.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const destinoId = this.getAttribute("href");
            const secaoDestino = document.querySelector(destinoId);

            if (secaoDestino) {
                secaoDestino.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
