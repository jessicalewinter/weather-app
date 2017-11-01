const expect =  require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('Shoulds add two numbers', () => {
            var res = utils.add(33,11);
            
            expect(res).toBe(44);
        });
    });
    
    describe('#asyncAdd', () => {
        it('Shoulds async add two numbers', (done) => {
            utils.asyncAdd(33,11,(sum) => {
                expect(sum).toBe(44);
                done();
            });
            
        });
    });
   
    describe('#square', () => {
        it('Should show the square of a number', () => {
            var res = utils.square(5);
        
            expect(res).toBe(25);
        
        });
    });
    
    describe('#asyncSquare', () => {
        it('Should show the async square of a number', (done) => {
            utils.asyncSquare(5, (square)=>{
                expect(square).toBe(25);
                done();
            });
        
        });
    });
    
    describe('#verify',() => {
        it('Should verify first and last names ', () => {
            var user = {location:'Brazil', age: 23};
            var res = utils.setName( user,'Jessica Lewinter');
        
            expect(res).toInclude({
                firstName: 'Jessica',
                lastName: 'Lewinter'
            })
        })
    });
});

