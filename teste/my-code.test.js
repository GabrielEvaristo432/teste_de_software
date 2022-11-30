import { soma, subtracao, multiplicacao, divisao, media } from './my-code.js';

// describe('Testes com a função divisão por inteiro', () =>
// {
//   it('Deve retornar a exceção para divisor igual a 0', () => {
//     expect(()=>divCalculadora(25,0)).toThrow();
//   });

//   it('Deve retornar a exceção para divisor maior que 0', () => {
//     expect(()=>divCalculadora(25,2)).not.toThrow();
//   });
// })


describe('Testes de calculadora com valores inteiro ', () => {
  it('Deve retornar a soma de dois valores', () => {
    const esperado = 30;
    const retornado = soma(10, 20);
    expect(retornado).toBe(esperado);
  });
  it('Deve retornar a subtração de dois valores', () => {
    const esperado = 10;
    const retornado = subtracao(20, 10);
    expect(retornado).toBe(esperado);
  });
  it('Deve retornar a multiplicação de dois valores', () => {
    const esperado = 10;
    const retornado = multiplicacao(1, 10);
    expect(retornado).toBe(esperado);
  });
  it('Deve retornar a divisão de dois valores', () => {
    const esperado = 5;
    const retornado = divisao(10, 2);
    expect(retornado).toBe(esperado);
  });
});

// describe('Testes de Unidade ', () => {
//   it('Deve retornar a soma de 1 + 1 com toBe', () => {
//       expect(1 + 1).toBe(2);
//   })

//   it('Deve retornar a igualdade de um objeto com toEqual', () => {
//       const obj1 = {coisa:1}
//       obj1.otacoisa = 2;
//       expect(obj1).toContain({ coisa: 1, otacoisa: 2 })
//   })
// })