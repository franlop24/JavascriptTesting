import { sumar, restar, multiplicar, dividir } from '../maths';

describe('Cálculos matemáticos', () => {
    test('Prueba de sumas ', () => {
        expect( sumar(1, 1) ).toBe(2);
    })
    test('Multiplicar ', () => {
        expect( multiplicar(2, 2) ).toBe(4);
    })
    test('Prueba de restas ', () => {
        expect( restar(4, 1) ).toBe(3);
    })
    test('Dividir ', () => {
        expect( dividir(2, 2) ).toBe(1);
    })
})