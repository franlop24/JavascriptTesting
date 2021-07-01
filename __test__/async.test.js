import { getDataFromApi } from '../promise';

describe('Probar Async/Await', () => {
  test('Realizar una petición a una API', async () => {
    const api = 'https://rickandmortyapi.com/api/character/';
    const getRick = 'https://rickandmortyapi.com/api/character/1'

    const data = await getDataFromApi(api);
    expect(data.results.length).toBeGreaterThanOrEqual(0);

    const data2 = await getDataFromApi(getRick);
    expect(data2.name).toEqual('Rick Sanchez');
  });

  test('Realizando una peticion a una api con error', async () => {
    try {
      // Sabemos que esta request va a devolver un error 500, entonces va a ejecutar el catch con el error.
      await getDataFromApi(`http://httpstat.us/404`);
    } catch(error) {
      expect(error).toEqual(new Error('Request failed with status code 404'));
    }
  });

  test('Resuelve un Hola', async () => {
    await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
    await expect(Promise.reject('Error')).rejects.toBe('Error');
  });
});