const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Sem parâtros retorna o objeto inteiro de horas', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Parâmetro Monday e 09:-AM retorna the zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Parâmetro Tuesday e 09:00-AM retorna the zoo is closed', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Parâmetro Wednesday e 09:00-AM retorna the zoo is closed', () => {
    expect(getOpeningHours('Tuesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Parâmetro Wednesday e string retorna The string should represent a number', () => {
    expect(() => {
      getOpeningHours('Tuesday', 'string');
    }).toThrow('The hour should represent a number');
  });
  it('Parâmetro Wednesday e 09:00-JM retorna The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(() => {
      getOpeningHours('Tuesday', '09:00-JM');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Parâmetro Thursday e 17:00-PM retorna The hour must be between 0 and 12', () => {
    expect(() => {
      getOpeningHours('Tuesday', '17:00-PM');
    }).toThrow('The hour must be between 0 and 12');
  });
  it('Parâmetro Thursday e 10:92-PM retorna The minutes must be between 0 and 59', () => {
    expect(() => {
      getOpeningHours('Tuesday', '10:92-PM');
    }).toThrow('The minutes must be between 0 and 59');
  });
  it('Parâmetro tusday e 10:00-PM retorna The minutes must be between 0 and 59', () => {
    expect(() => {
      getOpeningHours('tusday', '10:00-PM');
    }).toThrow('The day must be valid. Example: Monday');
  });
});
