const { getDb } = require("../db/mongo");
const { get } = require("./handlers");
const { ObjectId } = require("mongodb")
const collection = "produtcts"

async function insert(post) {
  const db = await getDb();
  const result = (await getDb()).collection("products").insertOne(post);

  return (await result).insertedId;
}

function find(name) {}

function getById() {
  const db = await getDb()
 
  await db.collection(collection).find()
}

module.exports = {
  insert,
};
