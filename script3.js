// Esperar a que el HTML cargue completamente antes de buscar botones
document.addEventListener('DOMContentLoaded', function() {
    
    // Intentamos buscar el botón de calcular (solo existe en IMC.html)
    const botonIMC = document.getElementById('btn-calcular');

    // Si el botón existe (estamos en la página de IMC), activamos la escucha
    if (botonIMC) {
        botonIMC.addEventListener('click', calcularIMC);
    }
});

// --- TU FUNCIÓN DE CÁLCULO (Mejorada) ---
function calcularIMC() {
    // 1. Obtener los valores
    // Usamos parseFloat para asegurar que sean números
    const inputPeso = document.getElementById('peso');
    const inputAltura = document.getElementById('altura');
    const divResultado = document.getElementById('resultado');
    const divClasificacion = document.getElementById('clasificacion');

    // Validación extra: Verificar si los elementos existen antes de leer su valor
    if (!inputPeso || !inputAltura) return;

    var peso = parseFloat(inputPeso.value);
    var altura = parseFloat(inputAltura.value);

    // 2. Validar si los valores son números válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingresa valores válidos (mayores a 0).");
        return;
    }

    // 3. Calcular el IMC
    var imc = peso / (altura * altura);

    // 4. Mostrar el resultado numérico
    // Verificamos que el div exista para no causar error
    if (divResultado) {
        divResultado.innerHTML = `Tu IMC es: <strong>${imc.toFixed(2)}</strong>`;
    }

    // 5. Clasificar el IMC
    var clasificacion = "";

    if (imc < 18.5) {
        clasificacion = "Bajo peso 🔵";
    } else if (imc >= 18.5 && imc < 25) {
        clasificacion = "Adecuado 🟢";
    } else if (imc >= 25 && imc < 30) {
        clasificacion = "Sobrepeso 🟡";
    } else if (imc >= 30 && imc < 35) {
        clasificacion = "Obesidad grado 1 🟠";
    } else if (imc >= 35 && imc < 40) {
        clasificacion = "Obesidad grado 2 🔴";
    } else {
        clasificacion = "Obesidad mórbida 🟣";
    }

    // 6. Mostrar la clasificación
    if (divClasificacion) {
        divClasificacion.innerHTML = `Clasificación: <strong>${clasificacion}</strong>`;
    }
}