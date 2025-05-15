
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// username password cluster

// @ === %40
// @ == hexdecimal: 0x40
const url = "mongodb+srv://CoderAkki:M.M3012005@coderakki.9igp1jj.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = 'AkkisDatabasei';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...
const findResult =  collection.find({});
  const ans = await findResult.toArray();

  console.log(ans) m

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());



// Database na karta ho, what will happen: Will it create DB for you or throw an error
// collection name karta ho: what will happen: Will it create collection for you or throw an error