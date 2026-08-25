class Viagem {

    // 1
    calcularTempoViagem(distancia, velocidade) {
        return distancia / velocidade;
    }

    // 2
    calcularVelocidadeMedia(distancia, tempo) {
        return distancia / tempo;
    }

    // 3
    calcularLitrosNecessarios(distancia, consumo) {
        return distancia / consumo;
    }

    // 4
    calcularCustoCombustivel(distancia, consumo, precoLitro) {
        return (distancia / consumo) * precoLitro;
    }

    // 5
    calcularCustoPedagios(quantidade, valorPedagio) {
        return quantidade * valorPedagio;
    }

    // 6
    calcularCustoHospedagem(dias, valorDiaria) {
        return dias * valorDiaria;
    }

    // 7
    calcularCustoAlimentacao(dias, gastoPorDia) {
        return dias * gastoPorDia;
    }

    // 8
    dividirDespesas(valorTotal, quantidadePessoas) {
        return valorTotal / quantidadePessoas;
    }

    // 9
    calcularDistanciaRestante(distanciaTotal, distanciaPercorrida) {
        return distanciaTotal - distanciaPercorrida;
    }

    // 10
    calcularPercentualPercorrido(distanciaTotal, distanciaPercorrida) {
        return (distanciaPercorrida / distanciaTotal) * 100;
    }

    // 11
    kmParaMilhas(km) {
        return km * 0.621371;
    }

    // 12
    milhasParaKm(milhas) {
        return milhas * 1.60934;
    }

    // 13
    podeLevarBagagem(pesoBagagem, limite) {
        return pesoBagagem <= limite;
    }

    // 14
    calcularExcessoBagagem(pesoBagagem, limite) {
        if (pesoBagagem <= limite) {
            return 0;
        }

        return pesoBagagem - limite;
    }

    // 15
    calcularTaxaBagagemExcedente(quilosExcedentes, valorPorQuilo) {
        return quilosExcedentes * valorPorQuilo;
    }

    // 16
    calcularAutonomia(combustivel, consumo) {
        return combustivel * consumo;
    }

    // 17
    calcularParadas(distancia, distanciaPorParada) {
        return Math.floor(distancia / distanciaPorParada);
    }

    // 18
    ehViagemLonga(distancia) {
        return distancia > 500;
    }

    // 19
    compararDistancias(distancia1, distancia2) {
        if (distancia1 < distancia2) {
            return "primeira";
        }

        if (distancia2 < distancia1) {
            return "segunda";
        }

        return "iguais";
    }

    // 20
    calcularCustoTotal(combustivel, pedagios, hospedagem, alimentacao) {
        return combustivel + pedagios + hospedagem + alimentacao;
    }
}

module.exports = Viagem;