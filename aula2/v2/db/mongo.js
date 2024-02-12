const { MongoClient } = require("mongodb");

let db;

async function getDb() {
  if (db) {
    return db;
  }

  const client = new MongoClient(process.env.DB_URL);
  const connection = await client.connect();
  const db = connection.db(process.env.DB_NAME);

  return db;
}

module.exports = {
  getDb,
};
