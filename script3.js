// Función para calcular el IMC
function calcularIMC() {
    // Obtener los valores de los campos de entrada
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Validar si los valores son válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    // Calcular el IMC
    var imc = peso / (altura * altura);

    // Mostrar el resultado del IMC en el HTML
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu IMC es: ${imc.toFixed(2)}`;

    // Clasificar el IMC
    var clasificacion = "";

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        clasificacion = "Adecuado";
    } else if (imc >= 25 && imc < 30) {
        clasificacion = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        clasificacion = "Obesidad grado 1";
    } else if (imc >= 35 && imc < 40) {
        clasificacion = "Obesidad grado 2";
    } else {
        clasificacion = "Obesidad mórbida";
    }

    // Mostrar la clasificación del IMC
    var clasificacionElemento = document.getElementById('clasificacion');
    clasificacionElemento.innerHTML = `Clasificación: ${clasificacion}`;
}
