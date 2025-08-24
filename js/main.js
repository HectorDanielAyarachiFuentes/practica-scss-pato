// Esperamos a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // Seleccionamos los elementos que necesitamos
    const factButton = document.getElementById('fact-btn');
    const factText = document.getElementById('duck-fact');

    // Creamos una lista de datos curiosos sobre patos
    const duckFacts = [
        "Los patos son aves acuáticas que se pueden encontrar tanto en agua dulce como en agua salada.",
        "Las plumas de un pato son impermeables. Hay una glándula especial cerca de su cola que produce aceite.",
        "Los patos tienen tres párpados en cada ojo.",
        "¡Los patitos pueden caminar y nadar pocas horas después de nacer!",
        "Los patos no tienen nervios ni vasos sanguíneos en sus patas, por lo que no sienten el frío.",
        "Algunas especies de patos pueden volar a altitudes de hasta 6,400 metros.",
        "El graznido de un pato (cuac) sí hace eco, ¡es un mito popular que no lo hace!",
        "Los patos limpian sus plumas constantemente para mantenerlas en perfectas condiciones.",
        "A los patos les encanta comer caracoles, plantas acuáticas y pequeños insectos."
    ];

    // Función para mostrar un dato aleatorio
    function showRandomFact() {
        // Obtenemos un índice aleatorio del array
        const randomIndex = Math.floor(Math.random() * duckFacts.length);
        
        // Actualizamos el texto del párrafo con el dato aleatorio
        factText.textContent = duckFacts[randomIndex];
    }

    // Añadimos un 'escuchador de eventos' al botón
    // Cuando se haga clic, se ejecutará la función showRandomFact
    factButton.addEventListener('click', showRandomFact);

});