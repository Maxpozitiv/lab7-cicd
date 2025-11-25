const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
    it('should return 200 OK and Hello message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello CI/CD!');
    });
});