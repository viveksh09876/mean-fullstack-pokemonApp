'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

var Pokemon = require('./pokemon.model');
var assert = require('assert');

describe('GET /api/pokemon', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/pokemon')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('Pokemon Model', function () {
  describe('.isValidName', function () {
    it('should return false for an empty string', function (done) {
      assert.equal(Pokemon.isValidName(''), false);
      done();
    });
  });
});

describe('POST /api/pokemon', function () {
  it('should return a JSON object', function (done) {
    request(app)
      .post('/api/pokemon')
      .type('json')
      .send({ name: 'Pikachu',
        picture: 'http://awesomeSite.com/pika.png',
        description: 'This pokemon is yellow' })
      .expect(200)
      .end(function (err, res) {
        res.body.should.be.instanceOf(Object);
        done();
      });
  });
});
