import { divCalculadora } from "./my-code"

// describe('Testes com a função divisão por inteiro', () =>
// {
//   it('Deve retornar a exceção para divisor igual a 0', () => {
//     expect(()=>divCalculadora(25,0)).toThrow();
//   });

//   it('Deve retornar a exceção para divisor maior que 0', () => {
//     expect(()=>divCalculadora(25,2)).not.toThrow();
//   });
// })

import { media } from '../my-code.js'

var val1
var val2
var val3

beforeAll(() => {
  console.log("Antes dos testes");
  val1 = 4
  val2 = 8
  val3 = 7
});

afterEach(() => {
  console.log("Depois de cada teste");
  val1 = 3
  val2 = 5
  val3 = 4
});

afterAll(() => {
  console.log("Após os teste");
  val1 = null;
  val2 = null;
  val3 = null;
});

describe('Checando média', () => {
  it('Deve retornar se a média das notas 4, 8, 7 é maior que 6 ', () => {
    console.log(val1 + "" + val2 + "" + val3);
    expect(media(val1, val2, val3)).toBeGreaterThanOrEqual(6);
  });
  it('Deve retornar se a média das notas 3, 5, 4 é menor que 6 ', () => {
    console.log(val1 + "" + val2 + "" + val3);
    expect(media(val1, val2, val3)).toBeLessThanOrEqual(6);
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