var expect = require('chai').expect;
var request = require('request');

const MongoClient = require('mongodb').MongoClient;

describe('Connect to MongoDB', () => {
    it('Successfully connect to the database', async () => {
        const uri = "mongodb://localhost:27017/Cats";
        const client = new MongoClient(uri);

        try{
            await client.connect();
            await client.db().admin().listDatabases();
            expect(client).to.be.an('object');
        } finally{
            await client.close();
        }
    });
});