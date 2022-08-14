const valuesInput = document.querySelector("input[type='text']");
const submit = document.querySelector("input[value='submit']");

submit.addEventListener('click', () => {

    const valueEnteredInInput = valuesInput.value;

    // Transforma os valores recebidos do input num array 
    const numbersInArray = valueEnteredInInput.split(',');

    let initialValue = 0;

    // Retorna a soma dos itens presente no array 
    let resultOfAddition =  numbersInArray.reduce((previousValue, currentValue) => parseInt(previousValue) +  parseInt(currentValue),
    initialValue);

    // guarda os itens resultantes do desvio médio
    const resultAverageDeviation = calculateAverageDeviation(numbersInArray, resultOfAddition);

    // guarda o valor da variância
    const variance = calculateVariance(resultAverageDeviation, numbersInArray.length);

    const standardDeviation = calculateStandardDeviation(variance);

    const printResult = ` Números utilizados: ${numbersInArray} \n Média aritmética: ${calculateArithmeticAverage(resultOfAddition, numbersInArray.length)} \n Desvio médio: ${calculateAverageDeviation(numbersInArray, resultOfAddition)} \n Variância: ${variance} \n Desvio padrão: ${standardDeviation}
    `

    console.log(printResult)
})

// Variáveis que são passadas como parâmetro *resultOfAddition* e *numberInArray.length*
function calculateArithmeticAverage(total, n) {
    // Resultado da média dos itens
    let resultArithmeticAverage = parseInt(total) / parseInt(n);

    return resultArithmeticAverage;
}


//Variáveis que são passadas como parâmetro *numberInArray* e *resultOfAddition*
function calculateAverageDeviation(arrayNumbers, resultAddition, ) {

    // Variável responsável por guardar os itens resultantes do desvio médio
    let resultOfAllItemsAverageDeviation = [];

    arrayNumbers.forEach(el => {
        // calcula o desvio médio de cada item
        const averageDeviation  = el - calculateArithmeticAverage(resultAddition, arrayNumbers.length);

        // transforma todos os números em positivo
        let positiveNumber = Math.abs(averageDeviation);

        resultOfAllItemsAverageDeviation.push(positiveNumber)
       
    })

    return resultOfAllItemsAverageDeviation;
}


// Variáveis que são passadas como parâmetro *resultAverageDeviation*, *numberInArray.length* e *initialValue*
function calculateVariance(arrayVariance, total) {
    let resultOfVariances = []

    arrayVariance.forEach(base => {
        const exponent = 2;

        // transforma o número em decimal e calcula a variância de cada item
        let calculateVariance = parseFloat(Math.pow(base, exponent));

        // deixa como fixo duas casas decimais
        let resultVariance = calculateVariance.toFixed(2);

        resultOfVariances.push(resultVariance);
    })

    let resultOfAdditionOfVariance =  resultOfVariances.reduce((previousValue, currentValue) => parseFloat(previousValue) +  parseFloat(currentValue), 0);


    // calcula a variância e deixa como fixo duas casa decimais 
    let division = parseFloat((parseFloat(resultOfAdditionOfVariance) / parseFloat(total)).toFixed(2));

    return division;
}

// Variável que é passada como parâmetro *variance*
function calculateStandardDeviation (result) {
    // calcula a raiz quadrada do resultado da variância e deixa como fixo duas casas decimais
    let standardDeviation = Math.sqrt(result).toFixed(2);

    // converte o resultado do desvio padrão pra número decimal
    let resultStandardDeviation = parseFloat(standardDeviation);

    return resultStandardDeviation;

}