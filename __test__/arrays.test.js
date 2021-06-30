import { arrayColors, arrayFruits } from '../arrays';

describe('Comprobar si existe algun elemento', ()=> {
    test('contiene una banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('no contiene un platano?', () => {
        expect(arrayFruits()).not.toContain('platano');
    });
    test('comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    })
});

