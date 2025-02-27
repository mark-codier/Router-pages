import { MongoClient, ObjectId } from "mongodb";

const uri =
  "mongodb+srv://mwegener-admin:mark2109a-z@next-js-page-router.refkm.mongodb.net/?retryWrites=true&w=majority&appName=Next-js-page-router";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const client = await MongoClient.connect(uri);
      const db = client.db("page-router");
      const meetupsCollection = db.collection("meetups");

      const { meetupId } = req.body;
      const result = await meetupsCollection.deleteOne({ _id: new ObjectId(meetupId) });

      client.close();

      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "No meetup found", deleted: false });
      }

      return res.status(200).json({ message: "Meetup deleted!", deleted: true });
    } catch (error) {
      console.error("Database Error:", error);
      return res.status(500).json({ message: "Failed to delete meetup", error: error.message, deleted: false });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

