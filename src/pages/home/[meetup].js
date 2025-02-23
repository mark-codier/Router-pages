import MeetupDetail from "@/components/meetups/MeetupDetails";
import Layout from "@/components/layout/Layout";
import getDummies from "@/helpers/getDummies";

export async function getStaticPaths() {
    const dummies = await getDummies(); // Fetch all meetups

    const paths = dummies.map(meetup => ({
        params: { meetup: meetup.id }, // Define all available meetup IDs
    }));

    return {
        paths,
        fallback: "blocking", // Generates new pages dynamically if not pre-rendered
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetup; // Get the meetup ID from the URL
    const dummies = await getDummies();
    const meetup = dummies.find(m => m.id === meetupId); // Find the correct meetup

    if (!meetup) {
        return { notFound: true }; // Show 404 if ID is invalid
    }

    return {
        props: { meetup },
        revalidate: 10, // Regenerate page every 10 seconds
    };
}

export default function MeetupDetails({ meetup }) {
    return (
        <Layout>
            <MeetupDetail meetup={meetup} />
        </Layout>
    );
}
