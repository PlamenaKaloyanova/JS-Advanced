const findNewApartment=require('./findApartment');
const {assert,expect}=require('chai')



describe('Find Apartment function tests', () =>{
    describe('isGoodLocation', () =>{

        it('different type ot string', () => {
            expect(findNewApartment.isGoodLocation('Burgas',true)).to.equal("This location is not suitable for you.")
        })

        it('first param is Sofia ,second param nearPublicTransportation is false ', () => {
            expect(findNewApartment.isGoodLocation('Sofia',false)).to.equal("There is no public transport in area.")
        })

        it('first param is Sofia ,second param nearPublicTransportation is true ', () => {
            expect(findNewApartment.isGoodLocation('Sofia',true)).to.equal("You can go on home tour!")
        })

        it('Invalid input - first param is not string, second param is boolean', () => {
            expect(()=>findNewApartment.isGoodLocation(4,true)).to.throw("Invalid input!")
        })
        it('Invalid input - first param is not string, second param is boolean', () => {
            expect(()=>findNewApartment.isGoodLocation([],true)).to.throw("Invalid input!")
        })
        it('Invalid input - first param is not string, second param is boolean', () => {
            expect(()=>findNewApartment.isGoodLocation({},true)).to.throw("Invalid input!")
        })

        it('Invalid input - first param string, second param is not boolean', () => {
            expect(()=>findNewApartment.isGoodLocation('Sofia',5)).to.throw("Invalid input!")
        })

        it('Invalid input - first param string, second param is not boolean', () => {
            expect(()=>findNewApartment.isGoodLocation('Sofia','true')).to.throw("Invalid input!")
        })

        it('Invalid input - first param string, second param is not boolean', () => {
            expect(()=>findNewApartment.isGoodLocation('Sofia',[])).to.throw("Invalid input!")
        })
        it('Invalid input - first param string, second param is not boolean', () => {
            expect(()=>findNewApartment.isGoodLocation('Sofia',{})).to.throw("Invalid input!")
        })

    })





    describe('isLargeEnough', () =>{

        it('Invalid input - first param is not array, second param is number', () => {
            expect(()=>findNewApartment.isLargeEnough('text',5)).to.throw("Invalid input!")
        })
        it('Invalid input - first param is empty array, second param is number', () => {
            expect(()=>findNewApartment.isLargeEnough([],10)).to.throw("Invalid input!")
        })

        it('Invalid input - first param is not empty array, second param is not number', () => {
            expect(()=>findNewApartment.isLargeEnough([40, 50, 60]),'string').to.throw("Invalid input!")
        })

        it('Valid input - first param is not empty array, second param is number bigger than minimalSquareMeters', () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60],45)).to.equal("50, 60")
        })

        it('Valid input - first param is not empty array, second param is equal to minimalSquareMeters', () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60],40)).to.equal("40, 50, 60")
        })


    })





    describe('isItAffordable', () =>{


        it('Invalid input - first param is not a number, second param is valid number', () => {
            expect(()=>findNewApartment.isItAffordable('test',10)).to.throw("Invalid input!")
        })

        it('Invalid input - first param is a valid number, second param is not a number', () => {
            expect(()=>findNewApartment.isItAffordable(100,'10')).to.throw("Invalid input!")
        })

        it('Invalid input - first param is a negative number, second param is valid number', () => {
            expect(()=>findNewApartment.isItAffordable(-15,10)).to.throw("Invalid input!")
        })

        
        it('Invalid input - first param is 0, second param is valid number', () => {
            expect(()=>findNewApartment.isItAffordable(0,10)).to.throw("Invalid input!")
        })

        it('Invalid input - first param is valid number, second param is negative number', () => {
            expect(()=>findNewApartment.isItAffordable(200,-50)).to.throw("Invalid input!")
        })

        it('Invalid input - first param is valid number, second param is 0 ', () => {
            expect(()=>findNewApartment.isItAffordable(200,0)).to.throw("Invalid input!")
        })

        it('Valid input - first param is valid number, second param is valid number,but budget is less than price ', () => {
            expect(findNewApartment.isItAffordable(200,50)).to.equal("You don't have enough money for this house!")
        })

        it('Valid input - first param is valid number, second param is valid number,but budget is bigger than price ', () => {
            expect(findNewApartment.isItAffordable(1000,12000)).to.equal("You can afford this home!")
        })
        
    })

})
