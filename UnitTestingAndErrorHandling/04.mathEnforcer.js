describe('mathEnforcer function tests', () => {


    describe('add five function tests', () => {
//tests with correct input
        it('Should return undefined with string', () => {
            assert(mathEnforcer.addFive('TEST') === undefined);
        });

        it('Should return undefined with an array', () => {
            assert(mathEnforcer.addFive([]) === undefined);
        });

        it('Should return undefined with an object', () => {
            assert(mathEnforcer.addFive({}) === undefined);
        });

        it('Should return undefined with an undefined', () => {
            assert(mathEnforcer.addFive(undefined) === undefined);
        });

        it('Should return undefined with an null', () => {
            assert(mathEnforcer.addFive(null) === undefined);
        });
//test with correct input
        it('Possitive integer number +5', () => {
            assert(mathEnforcer.addFive(5) === 10);
        });

        it('Negative number +5', () => {
            assert(mathEnforcer.addFive(-5) === 0)
        });

        it('Decimal number', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5)
        });

    })

    describe('subtract ten function tests', () => {
        it('Should return undefined with string', () => {
            assert(mathEnforcer.subtractTen('TEST') === undefined);
        });

        it('Should return undefined with an array', () => {
            assert(mathEnforcer.subtractTen([]) === undefined);
        });

        it('Should return undefined with an object', () => {
            assert(mathEnforcer.subtractTen({}) === undefined);
        });

        it('Should return undefined with an undefined', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });

        it('Should return undefined with an null', () => {
            assert(mathEnforcer.subtractTen(null) === undefined);
        });

        it('Possitive integer number -10', () => {
            assert(mathEnforcer.subtractTen(5) === -5);
        });

        it('Negative number -10', () => {
            assert(mathEnforcer.subtractTen(-5) === -15)
        });

        it('Decimal number -10', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5)
        });

        
    });

    describe('sum of two numbers function tests', () => {
//Tests with correct input
        it('Two possitive numbers', () => {
            assert(mathEnforcer.sum(5,5) === 10);
        });

        it('Two negative numbers', () => {
            assert(mathEnforcer.sum(-10,-5) === -15);
        });

        it('Two decimal numbers', () => {
            assert(mathEnforcer.sum(10.5,2.1) ===12.6);
        });
    //Tests with incorrect inputs


    it('First parameter is string,second number', () => {
        assert(mathEnforcer.sum('',5) === undefined);
    });

    it('First parameter is number,second is string ', () => {
        assert(mathEnforcer.sum(10,'') === undefined);
    });

    })
})
