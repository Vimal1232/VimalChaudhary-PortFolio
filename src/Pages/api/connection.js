import { MongoClient } from "mongodb";

async function connect(uri) {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db("ClientName");
  const collection = await db.collection("Client");
}

export default async function handler(req, res) {
  const db = await connect(process.env.MONGODB_URI);
  res.status(200).json({ hello: "world" });
}
