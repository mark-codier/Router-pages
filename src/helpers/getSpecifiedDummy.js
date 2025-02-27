import { MongoClient, ObjectId } from "mongodb";

const uri =
  "mongodb+srv://mwegener-admin:mark2109a-z@next-js-page-router.refkm.mongodb.net/?retryWrites=true&w=majority&appName=Next-js-page-router";

export default async function getSpecifiedDummy(meetupId) {
  try {
      const client = await MongoClient.connect(uri);
      const db = client.db("page-router");
      const meetupsCollection = db.collection("meetups");

      const meetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

      client.close();

      return meetup ? { ...meetup, _id: meetup._id.toString() } : null; // Convert ObjectId to string
  } catch (error) {
      console.error("Error fetching meetup:", error);
      return null;
  }
}