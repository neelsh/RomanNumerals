describe('Roman numeral converter', () => {
  it('Converts integers to roman numerals', () => {

    expect(romanNumerals(1)).toEqual('I');
    expect(romanNumerals(4)).toEqual('IV');
    expect(romanNumerals(5)).toEqual('V');
    expect(romanNumerals(9)).toEqual('IX');
    expect(romanNumerals(10)).toEqual('X');
    expect(romanNumerals(40)).toEqual('XL');
    expect(romanNumerals(50)).toEqual('L');
    expect(romanNumerals(90)).toEqual('XC');
    expect(romanNumerals(100)).toEqual('C');
    expect(romanNumerals(400)).toEqual('CD');
    expect(romanNumerals(500)).toEqual('D');
    expect(romanNumerals(900)).toEqual('CM');
    expect(romanNumerals(1000)).toEqual('M');
    expect(romanNumerals(1977)).toEqual('MCMLXXVII');
  })
})

describe('Integer converter', () => {
  it('Converts roman numerals to integers', () => {

    expect(integer('I')).toEqual(1);
    expect(integer('II')).toEqual(2);
    expect(integer('IV')).toEqual(4);
    expect(integer('V')).toEqual(5);
    expect(integer('IX')).toEqual(9);
    expect(integer('X')).toEqual(10);
    expect(integer('XL')).toEqual(40);
    expect(integer('L')).toEqual(50);
    expect(integer('XC')).toEqual(90);
    expect(integer('C')).toEqual(100);
    expect(integer('CD')).toEqual(400);
    expect(integer('D')).toEqual(500);
    expect(integer('CM')).toEqual(900);
    expect(integer('M')).toEqual(1000);
    expect(integer('MMCDLXXXIII')).toEqual(2483);
  })
})
