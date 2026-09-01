const Viagem = require("../src/viagem");

describe("Cálculos e regras de viagem", () => {
  let viagem;

  beforeEach(() => {
    viagem = new Viagem();
  });

  test("calcula o tempo de viagem com base na distância e na velocidade", () => {
    expect(viagem.calcularTempoViagem(300, 100)).toBe(3);
  });

  test("calcula a velocidade média com base na distância e no tempo", () => {
    expect(viagem.calcularVelocidadeMedia(450, 5)).toBe(90);
  });

  test("calcula os litros necessários com base na distância e no consumo", () => {
    expect(viagem.calcularLitrosNecessarios(360, 12)).toBe(30);
  });

  test("calcula o custo do combustível para a distância informada", () => {
    expect(viagem.calcularCustoCombustivel(360, 12, 5.5)).toBe(165);
  });

  test("calcula o custo total dos pedágios", () => {
    expect(viagem.calcularCustoPedagios(4, 12.5)).toBe(50);
  });

  test("calcula o custo total da hospedagem", () => {
    expect(viagem.calcularCustoHospedagem(3, 180)).toBe(540);
  });

  test("calcula o custo total da alimentação", () => {
    expect(viagem.calcularCustoAlimentacao(4, 75)).toBe(300);
  });

  test("divide igualmente as despesas entre as pessoas", () => {
    expect(viagem.dividirDespesas(900, 3)).toBe(300);
  });

  test("calcula a distância restante após o trecho percorrido", () => {
    expect(viagem.calcularDistanciaRestante(800, 250)).toBe(550);
  });

  test("calcula o percentual da distância já percorrida", () => {
    expect(viagem.calcularPercentualPercorrido(800, 200)).toBe(25);
  });

  test("converte quilômetros em milhas", () => {
    expect(viagem.kmParaMilhas(10)).toBeCloseTo(6.21371, 5);
  });

  test("converte milhas em quilômetros", () => {
    expect(viagem.milhasParaKm(10)).toBeCloseTo(16.0934, 4);
  });

  test("aceita bagagem dentro do limite e rejeita bagagem acima dele", () => {
    expect(viagem.podeLevarBagagem(20, 20)).toBe(true);
    expect(viagem.podeLevarBagagem(21, 20)).toBe(false);
  });

  test("retorna zero dentro do limite e os quilos excedentes acima dele", () => {
    expect(viagem.calcularExcessoBagagem(18, 20)).toBe(0);
    expect(viagem.calcularExcessoBagagem(25, 20)).toBe(5);
  });

  test("calcula a taxa correspondente aos quilos excedentes", () => {
    expect(viagem.calcularTaxaBagagemExcedente(5, 30)).toBe(150);
  });

  test("calcula a autonomia do veículo com o combustível disponível", () => {
    expect(viagem.calcularAutonomia(40, 12)).toBe(480);
  });

  test("calcula apenas a quantidade de paradas completas", () => {
    expect(viagem.calcularParadas(950, 300)).toBe(3);
  });

  test("considera longa apenas a viagem com mais de 500 quilômetros", () => {
    expect(viagem.ehViagemLonga(501)).toBe(true);
    expect(viagem.ehViagemLonga(500)).toBe(false);
  });

  test("identifica a menor distância ou informa quando são iguais", () => {
    expect(viagem.compararDistancias(100, 200)).toBe("primeira");
    expect(viagem.compararDistancias(200, 100)).toBe("segunda");
    expect(viagem.compararDistancias(100, 100)).toBe("iguais");
  });

  test("soma todas as despesas para obter o custo total da viagem", () => {
    expect(viagem.calcularCustoTotal(300, 80, 600, 320)).toBe(1300);
  });
});
