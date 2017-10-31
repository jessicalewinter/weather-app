const expect =  require('expect');

const utils = require('./utils');

it('Shoulds add two numbers', () => {
    var res = utils.add(33,11);
    
    expect(res).toBe(44);
    
});

it('Should show the square of a number', () => {
    var res = utils.square(5);

    expect(res).toBe(25);

});

it('Should verify first and last names ', () => {
    var user = {location:'Brazil', age: 23};
    var res = utils.setName( user,'Jessica Lewinter');

    expect(res).toMatchObject({
        firstName: 'Jessica',
        lastName: 'Lewinter'
    })
})

// it('Should expect some values', () => {
//     // expect({name: 'Jessica'}).not.toEqual({name: 'Jessica'});
//    expect({
//        name: 'Jessica',
//        age:23,
//        location: 'Brazil',
//    })

// });