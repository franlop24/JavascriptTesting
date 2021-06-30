import { isNull, isTrue, isUndefined, isFalse } from '../true';

describe('Probar resultados Nulos', () => {
    test('null', () => {
        expect(isNull()).toBeNull();
    });
});
describe('Probar resultador verdaderos', () => {
    test('verdaderos', () => {
        expect(isTrue()).toBeTruthy();
    });
});
describe('Probar resultador falsos', () => {
    test('falsos', () => {
        expect(isFalse()).toBeFalsy();
    });
});
describe('Probar resultador undefined', () => {
    test('undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
});
describe('Probar resultados no verdaderos', () => {
    test('verdadero o falso', () => {
        expect(isFalse()).not.toBeTruthy();
    });
});