import ErrorRepository from '../ErrorRepository';

describe('ErrorRepository', () => {
    let errorRepo;

    beforeEach(() => {
        errorRepo = new ErrorRepository();
    });

    test('Должно возвращать сообщение об ощибке правильных кодов', () => {
        expect(errorRepo.translate(400)).toBe('Bad Request');
        expect(errorRepo.translate(401)).toBe('Unauthorized');
        expect(errorRepo.translate(403)).toBe('Forbidden');
        expect(errorRepo.translate(404)).toBe('Not Found');
        expect(errorRepo.translate(500)).toBe('Internal Server Error');
    });

    test('Должен возвращать «Неизвестную ошибку» для неизвестных кодов ошибок', () => {
        expect(errorRepo.translate(999)).toBe('Unknown error');
        expect(errorRepo.translate(-1)).toBe('Unknown error');
        expect(errorRepo.translate(0)).toBe('Unknown error');
    });
});
