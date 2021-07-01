import { getDataFromApi } from '../promise';

describe('Probando promises', () => {
    test('Realizando una petición a una API', done => {
        const url = 'https://rickandmortyapi.com/api/character/';
        getDataFromApi(url).then( data => {
            //console.log(data);
            expect(data.results.length).toBeGreaterThan(0);
            done();
        });
    });

    test('Resuelve un Hola!', () => {
        return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!');
    });

    test('Rechaza con un error', () => {
        return expect(Promise.reject('Errror')).rejects.toBe('Errror');
    });
});