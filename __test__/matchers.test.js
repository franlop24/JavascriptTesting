describe('Comparadores comunes', () => {
    const user = {
        name: "paco",
        lastname: "lopez"
    }
    const user2 = {
        name: "paco2",
        lastname: "lopez2"
    }
    test('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });
    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user2);
    });
})