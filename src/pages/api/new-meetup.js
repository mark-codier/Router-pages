//api/new-meetup
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://mwegener-admin:mark2109a-z@next-js-page-router.refkm.mongodb.net/?retryWrites=true&w=majority&appName=Next-js-page-router";

export default async function handler(req, res) {
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db("page-router");
    const meetupsCollection = db.collection("meetups");

    const resultat = await meetupsCollection.insertOne(req.body);

    console.log("Insertion Result:", resultat);

    client.close();

    res.status(201).json({ message: "Meetup inserted!", error: false, meetupId: resultat.insertedId.toString() });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(501).json({ message: "Failed to insert meetup", error: error.message });
  }
}
