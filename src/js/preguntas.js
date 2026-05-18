document.addEventListener("DOMContentLoaded", () => {
    const contenedores = document.querySelectorAll(".opciones-container");
    const resultadoDiv = document.getElementById("resultado-final");
    const puntajeTexto = document.getElementById("puntaje-texto");

    let respuestasCorrectas = 0;
    let preguntasRespondidas = 0;
    const totalPreguntas = contenedores.length;
    contenedores.forEach(contenedor => {
        const botones = contenedor.querySelectorAll(".btn-opcion");

        botones.forEach(boton => {
            boton.addEventListener("click", () => {
                if (contenedor.dataset.respondida === "true") return;

                contenedor.dataset.respondida = "true";
                preguntasRespondidas++;

                const esCorrecta = boton.getAttribute("data-correcta") === "true";

                if (esCorrecta) {
                    boton.classList.add("correcta");
                    respuestasCorrectas++;
                } else {
                    boton.classList.add("incorrecta");
                    botones.forEach(b => {
                        if (b.getAttribute("data-correcta") === "true") {
                            b.classList.add("correcta");
                        }
                    });
                }
                botones.forEach(b => b.style.cursor = "default");
                if (preguntasRespondidas === totalPreguntas) {
                    puntajeTexto.textContent = `Acertaste ${respuestasCorrectas} de ${totalPreguntas} preguntas.`;
                    resultadoDiv.style.display = "block";
                    resultadoDiv.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    });
});