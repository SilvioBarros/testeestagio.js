// valores da fatura mensal
const faturamentoMensal = [1500.75, 0, 1800.50, 2200.10, 0, 2750.80, 0, 2100.30]; // Exemplo de dados

// calcula o faturamento mensal
function calcularFaturamento(faturamento) {
    const diasComFaturamento = faturamento.filter(valor => valor > 0);
    const total = diasComFaturamento.reduce((acc, curr) => acc + curr, 0);
    const media = total / diasComFaturamento.length;

    const menor = Math.min(...diasComFaturamento);
    const maior = Math.max(...diasComFaturamento);

    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > media).length;

    return {
        menorValor: menor,
        maiorValor: maior,
        diasAcimaDaMedia: diasAcimaDaMedia
    };
}

const resultado = calcularFaturamento(faturamentoMensal);
console.log(`Menor valor de faturamento: R$${resultado.menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${resultado.maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
