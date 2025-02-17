const quizData = [
    {
        question: "1. ¿Cuál es la función de la membrana plasmática?",
        answers: {
            a: "Almacenar energía",
            b: "Rodear a la célula y actuar como límite exterior",
            c: "Sintetizar proteínas"
        },
        correct: "b"
    },
    {
        question: "2. ¿Qué función cumplen las proteínas en la membrana plasmática?",
        answers: {
            a: "Regulan el tráfico de moléculas",
            b: "Generan energía",
            c: "Producen lípidos"
        },
        correct: "a"
    },
    {
        question: "3. ¿Qué es el citoplasma?",
        answers: {
            a: "La parte fluida dentro de la célula que contiene organelos",
            b: "Una membrana externa que protege la célula",
            c: "Un organelo que produce proteínas"
        },
        correct: "a"
    },
    {
        question: "4. ¿Qué es el citoesqueleto?",
        answers: {
            a: "Un organelo que produce energía",
            b: "Una estructura que soporta y da forma a la célula",
            c: "Una membrana que separa el núcleo"
        },
        correct: "b"
    },
    {
        question: "5. ¿Qué tipo de células tienen núcleo?",
        answers: {
            a: "Procariotas",
            b: "Eucariotas",
            c: "Todas las células"
        },
        correct: "b"
    },
    {
        question: "6. ¿Cuál es el tamaño promedio de una célula procariota?",
        answers: {
            a: "1-2 micras",
            b: "10-100 micras",
            c: "50-200 micras"
        },
        correct: "a"
    },
    {
        question: "7. ¿Qué es un plásmido?",
        answers: {
            a: "Una proteína",
            b: "Una cápsula de lípidos",
            c: "Un pequeño anillo de ADN"
        },
        correct: "c"
    },
    {
        question: "8. ¿Cuál es la función de los pili de adhesión?",
        answers: {
            a: "Formar un puente entre bacterias",
            b: "Permitir a las células unirse a distintas superficies",
            c: "Mover la célula a través de fluidos"
        },
        correct: "b"
    },
    {
        question: "9. ¿Qué tienen en común todas las células eucariotas?",
        answers: {
            a: "Carecen de núcleo",
            b: "Tienen núcleo y organelos",
            c: "Son unicelulares"
        },
        correct: "b"
    },
    {
        question: "10. ¿Qué tipo de moléculas forman la bicapa de la membrana plasmática?",
        answers: {
            a: "Ácidos nucleicos",
            b: "Fosfolípidos",
            c: "Proteínas"
        },
        correct: "b"
    },
    {
        question: "11. ¿Cuál es la función de la matriz extracelular en las células animales?",
        answers: {
            a: "Actuar como barrera protectora",
            b: "Proveer soporte y unir células adyacentes",
            c: "Sintetizar proteínas"
        },
        correct: "b"
    },
    {
        question: "12. ¿Cuál es la estructura que almacena el material genético en las células eucariotas?",
        answers: {
            a: "Mitocondria",
            b: "Ribosomas",
            c: "Núcleo"
        },
        correct: "c"
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    const output = [];
    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} de ${quizData.length} respuestas correctas`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
