// Seleciona o elemento de exibição da calculadora (o <p> com id "display")
const display = document.getElementById("display");

// Função chamada quando um botão é clicado para adicionar um valor à tela
function appendToDisplay(input) {
    // Verifica se o display está mostrando "0" (inicialmente é 0)
    if (display.innerText === "0") {
        display.innerText = input; // Se for "0", substitui pelo valor que foi clicado
    } else {
        display.innerText += input; // Caso contrário, adiciona o valor ao final do conteúdo atual
    }
};

// Função para limpar o display (quando o botão "AC" é pressionado)
function clearDisplay() {
    display.innerText = 0; // Reseta o conteúdo do display para "0"
};

// Função para calcular a expressão matemática quando o botão "=" é pressionado
function calculate() {
    try {
        // Usamos o eval() para calcular a expressão exibida no display
        // Substituímos 'X' por '*' (multiplicação) e '÷' por '/' (divisão) para torná-las válidas em JavaScript
        display.innerText = eval(display.innerText.replace('X', '*').replace('÷', '/'));
    }
    catch(error) {
        // Se ocorrer um erro (como uma expressão inválida), exibe "Error"
        display.innerText = "Error";
    }
};
