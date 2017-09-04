describe('Roman', function () {
    it('should convert 10 to X', function () {
      expect(convertToRoman(10)).toBe('X');
    });

     it('should convert 1 to I', function () {
      expect(convertToRoman(1)).toBe('I');
    });

     it('should convert 1977 to MCMLXXVII', function () {
      expect(convertToRoman(1977)).toBe('MCMLXXVII');
    });
});


describe('Integer', function () {
    it('should start with 0 when there is no entry', function () {
      expect(convertToInteger('')).toBe(0);
    });

    it('should convert X to 10', function () {
      expect(convertToInteger('X')).toBe(10);
    });

     it('should convert I to 1', function () {
      expect(convertToInteger('I')).toBe(1);
    });

     it('should convert MCMLXXVII to 1977', function () {
      expect(convertToInteger('MCMLXXVII')).toBe(1977);
    });
});
