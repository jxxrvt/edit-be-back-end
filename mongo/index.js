//senha: v12345678900987654321;
const dotenv = require("dotenv");
dotenv.config(); // esse pach vai atrás do ficheiro .env
const { MongoClient } = require("mongodb");

const dbUrl = process.env.DB_URL; // ->

const client = new MongoClient(dbUrl);

async function main() {
  await client.connect();

  const db = client.db("edit");
  db.collection("testes").insertMany([{ test: 1234 }]);
  console.log(db.collection("test").find({}).toArray());

  await db.collection("");
}
main()
  .then(() => console.log("done"))
  .catch((err) => console.log(err));
