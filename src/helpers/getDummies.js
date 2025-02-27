import { MongoClient } from "mongodb";

export default async function getDummies() {
  const uri =
    "mongodb+srv://mwegener-admin:mark2109a-z@next-js-page-router.refkm.mongodb.net/?retryWrites=true&w=majority&appName=Next-js-page-router";
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db("page-router");
    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    // Ensure data is serializable (convert _id to string)
    const serializedMeetups = meetups.map((meetup) => ({
      ...meetup,
      _id: meetup._id.toString(),
    })); // [{title, image, address, description, _id}]

    return {
      props: {
        meetups: serializedMeetups || [], // Ensure it's always an array
      },
      revalidate: 10, // Enable ISR
    };
  } catch (error) {
    console.error("Failed to fetch meetups:", error);
    return {
      props: { meetups: [] }, // Fallback value to prevent errors
    };
  }
}