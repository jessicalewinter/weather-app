const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
    describe('#GET /', () => {
        it('should return hello as response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toMatchObject({
                        error: 'Page not found.'
                    })
                })
                .end(done);
        });
    });
    
    describe('#GET /users', () => {
        it('should return the name of the user', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toMatchObject({
                        name: 'Jessica',
                        age: 23
                    })
                })
                .end(done);
        })
    });
    
});

