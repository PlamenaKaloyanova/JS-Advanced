describe('3CharLookup.js', () => {

    it('Return char at index', () => {
        assert(lookupChar('Love', 0) === 'L')
    });
    it('Return char at index', () => {
        assert(lookupChar('Love', 1) === 'o')
    });
    it('Index over the string length', () => {
        assert(lookupChar('Love', 10) === 'Incorrect index')
    });

    it('Empty string as input', () => {
        assert(lookupChar('', 0) === 'Incorrect index')
    });

    it('Negative string index', () => {
        assert(lookupChar('Love', -5) === 'Incorrect index')
    });

    it('Return undefined if first parametar is not string', () => {
        assert(lookupChar(100, 10) === undefined)
    });

    it('Return undefined if second parametar is decimal', () => {
        assert(lookupChar('Love', 15.5) === undefined)
    });


    it('Return undefined with wrong parameters', () => {
        assert(lookupChar(10, 'str') === undefined)
    });

});
