const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('Should call the spy correctly',() => {
        var spy = expect.createSpy();
        spy('Andrew', 22);
        expect(spy).toHaveBeenCalledWith('Andrew', 22);
    });

    it('Should call saveUser with user object', () => {
        var email = 'jessicalewinter@gmail.com';
        var password = '12345abcde';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
});