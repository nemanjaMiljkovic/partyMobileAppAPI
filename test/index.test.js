const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('API response', () => {
  it('retrives JSON data', (done) => {
      request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('items has events', (done) => {
    request(app)
    .get('/')
    .expect((res) => {
        const data = res.body;
        for(let club in data) {
          expect(data[club]).to.include.keys('events');
        }
    }).end(done);
  });
});
