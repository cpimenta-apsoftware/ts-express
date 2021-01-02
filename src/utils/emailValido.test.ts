import {emailValido} from "./emailValido";

describe('emailValido Utils', () => {
    it('É um e-mail válido', () => {
        ['cpimenta.apsoftware@gmail.com', 'maria.eduarda@outlook.com', 'caio.filipe@hotmail.com'].map((s) => {
            expect(emailValido(s)).toEqual(true);
        });
    });

    it('Não é um e-mail válido', () => {
        [false, true, NaN, [], {}, 'cpimenta.apsoftware'].map((s) => {
            expect(emailValido(s)).toEqual(false);
        });
    });
});
