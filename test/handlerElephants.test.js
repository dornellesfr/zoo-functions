const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Without parameter return undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Withou string return a \' Parâmetro inválido, é necessário uma string \'', () => {
    expect(handlerElephants(21)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('with count parameter return 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('with name parameter return a array with Jefferson name', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('with averageAge parameter return close to 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('with location parameter return NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('with popularity parameter return 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('with availability parameter return [Friday, Saturday, Sunday, Tuesday]', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('with none parameter return null', () => {
    expect(handlerElephants('')).toBeNull();
  });
});
