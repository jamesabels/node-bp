import hello from './main';

test('should return the name passed', () => {
    expect(hello('Typescript')).toBe('Hello, Typescript');
});

test('should throw if the name passed is empty', () => {
    expect(() => hello("")).toThrow();
});
