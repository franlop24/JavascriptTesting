//Después de cada prueba
afterEach(() => console.log('Después de cada prueba'));
afterAll(() => console.log('Después todas las pruebas'));

//Antes de las pruebas
beforeAll(() => console.log('Antes de todas las pruebas'));
beforeEach(() => console.log('Antes de cada prueba'));

describe('preparar antes de ejecutarse', () => {
    test('Es verdadero', () => {
        expect(true).toBeTruthy();
    });
});