describe('Testes de Unidade ', () => {
    it('Deve retornar a soma de 1 + 1 com toBe', () => {
        expect(1 + 1).toBe(2);
    })

    it('Deve retornar a igualdade de um objeto com toEqual', () => {
        const obj1 = {coisa:1}
        obj1.otacoisa = 2;
        expect(obj1).toContain({ coisa: 1, otacoisa: 2 })
    })
})